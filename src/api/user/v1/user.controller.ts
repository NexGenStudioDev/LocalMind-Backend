import { Request, Response } from "express";
import { ZodError } from "zod";
import { userLoginSchema, userRegisterSchema } from "./user.validator";
import userService from "./user.service";
import { SendResponse } from "../../../utils/SendResponse.utils";
import UserUtils from "./user.utils";
import { IUser } from "./user.type";

class UserController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const validatedData = userRegisterSchema.parse(req.body);

      const user = await userService.createUser(validatedData);

      const userObj: IUser = user.toObject();
      delete (userObj as { password?: string }).password;
      delete (userObj as { createdAt?: Date }).createdAt;
      delete (userObj as { updatedAt?: Date }).updatedAt;
      delete (userObj as { __v?: number }).__v;

      const token = UserUtils.generateToken({
        userId: user._id.toString(),
        email: user.email,
        role: user.role,
      });
      SendResponse.success(
        res,
        "data send Successully",
        { userObj, token },
        201,
      );
    } catch (err : any) {
      if (err instanceof ZodError) {
        SendResponse.error(res,"Error occur here", 500, err)

      } else {
        SendResponse.error(res, err.message, 500);
      }
    }
  }

  async login(req: Request, res: Response): Promise<void>{
    try {
      const validateData = userLoginSchema.parse(req.body);
      const user = await UserUtils.findByEmailandCheckPassword(validateData);
      SendResponse.success(res,"data send successfully", user, 200)
    } catch (err : any){
      SendResponse.error(res,"error in fetching user", 404);
    }
  }
}

export default new UserController();
