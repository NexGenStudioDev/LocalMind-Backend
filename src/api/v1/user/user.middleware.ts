import { Request, Response, NextFunction } from "express";
import { SendResponse } from "../../../utils/SendResponse.utils";
import UserUtils from "./user.utils";
import { IUser } from "./user.type";
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
        SendResponse.error(res, "Token missing", 401);
        return;
      }

      const decodedData: IUser | null = UserUtils.verifyToken(token);

      if (!decodedData) {
        SendResponse.error(res, "Invalid token", 401);
        return;
      }

      req.user = decodedData;
      return next();
    } catch (err: any) {
      SendResponse.error(res, err.message || "Something went wrong", 500);
    }
  }
}

export default new UserMiddleware();
