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
      const rawAuth = Array.isArray(req.headers["authorization"])
        ? req.headers["authorization"][0]
        : req.headers["authorization"];

      const token: string | undefined =
        (req.cookies && (req.cookies as any).userToken) ||
        rawAuth?.split(" ")[1];
      if (!token) {
        SendResponse.error(res, UserConstant.TOKEN_MISSING, 401);
        return;
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
