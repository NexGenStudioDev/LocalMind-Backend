import { Request, Response, NextFunction } from "express";
import { SendResponse } from "../../../utils/SendResponse.utils";
import UserUtils from "./user.utils";
import { IUser } from "./user.type";
import UserConstant from "./user.constant";
class UserMiddleware {
  async middleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
    const token =
        req.headers.authorization?.split(" ")[1] || req.cookies?.token;

        console.log("Token in middleware:", token);
      if (!token) {
        throw new Error(UserConstant.TOKEN_MISSING);
      }
    

      const decodedData: IUser | null = UserUtils.verifyToken(token);

      if (!decodedData) {
        SendResponse.error(res, UserConstant.INVALID_TOKEN, 401);
        return;
      }

      req.user = decodedData;
      return next();
    } catch (err: any) {
      SendResponse.error(res, err.message || UserConstant.SERVER_ERROR, 500);
    }
  }
}

export default new UserMiddleware();
