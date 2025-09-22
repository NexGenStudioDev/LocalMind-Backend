import { Request, Response } from "express";
import { ZodError } from "zod";
import { userRegisterSchema } from "./user.validator";
import userService from "./user.service";
import { SendResponse } from "../../../utils/SendResponse.utils";

class UserController {
  async register(req: Request, res: Response): Promise<void> {
    try {
      const validatedData = userRegisterSchema.parse(req.body);

      const user = await userService.createUser(validatedData);
      SendResponse.success(res,"data send Successully", user, 201)
    } catch (err : any) {
      if (err instanceof ZodError) {
        SendResponse.error(res,"data send Successully", 500, err)
      } else {
        SendResponse.error(res, err.message, 500);
      }
    }
  }
}

export default new UserController();
