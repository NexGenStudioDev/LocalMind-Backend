import { IUser } from "../src/api/user/v1/user.type";

declare module "express" {
  export interface Request {
    user?: IUser;
  }
}
