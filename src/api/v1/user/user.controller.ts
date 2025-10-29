import { Request, Response } from "express";
import { ZodError } from "zod";
import { userLoginSchema, userRegisterSchema } from "./user.validator";
import userService from "./user.service";
import { SendResponse } from "../../../utils/SendResponse.utils";
import UserUtils from "./user.utils";
import { IUser } from "./user.type";
import jwt from "jsonwebtoken";
import UserConstant from "./user.constant";
import { StatusConstant } from "../../../constant/Status.constant";

class UserController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const validatedData = await userRegisterSchema.parseAsync(req.body);

      if (!req.body.password) {
        throw new Error(UserConstant.PASSWORD_REQUIRED);
      }

      const user = await userService.createUser(validatedData);

      const { password, ...userObj } = user; 

      const token = UserUtils.generateToken({
        userId: String(user._id),
        email: user.email,
        role: user.role,
      });

      SendResponse.success(
        res,
        UserConstant.CREATE_USER_SUCCESS,
        { userObj, token },
        201,
      );
    } catch (err: any) {

      SendResponse.error(res, err.message || UserConstant.CREATE_USER_FAILED, 500, err);

    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const validatedData = userLoginSchema.parse(req.body);

      const user = await UserUtils.findByEmailandCheckPassword(validatedData);

      const token = UserUtils.generateToken({
        userId: user.userObj._id || "",
        email: user.userObj.email,
        role: user.userObj.role,
      });

      SendResponse.success(res, UserConstant.LOGIN_USER_SUCCESS, { user, token }, StatusConstant.OK);

    } catch (err: any) {
      SendResponse.error(res, err.message || "Invalid credentials", 401, err);
    }
  }

  async profile(req: Request, res: Response): Promise<void> {
    try {
    
      const token =  req.headers.authorization?.split(" ")[1] || req.cookies?.token;

      if (!token) {
        throw new Error("Authentication token missing");
      }


      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
        userId: string;
      };


      const user = await UserUtils.findById(decoded.userId);

      if (!user) {
        throw new Error("User not found");
      }

      const userObj: Partial<IUser> = { ...user };
      delete userObj.password;

      SendResponse.success(res, "Profile fetched successfully", userObj, 200);
    } catch (err: any) {
      if (err.name === "JsonWebTokenError") {
        SendResponse.error(res, "Invalid token", 401);
      } else {
        SendResponse.error(
          res,
          err.message || "Failed to fetch profile",
          500,
          err,
        );
      }
    }
  }

  async apiEndPointCreater(req: Request, res: Response): Promise<void> {
    try {
      if (!req.user) {
          throw new Error(UserConstant.INVALID_INPUT);
      }

      const apiKey = await userService.apiKeyCreater(req.user as IUser);

      SendResponse.success(
        res,
        "API key created successfully",
        { apiKey },
        200,
      );
    } catch (err: any) {
      SendResponse.error(
        res,
        err.message || "Failed to create API key",
        500,
        err,
      );
    }
  }
}

export default new UserController();
