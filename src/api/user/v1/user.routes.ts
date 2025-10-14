import { Router } from "express";
const router: Router = Router();

import userController from "./user.controller";
import userMiddleware from "./user.middleware";

router.post("/v1/user/register", userController.register);

router.post("/v1/user/login", userController.login);

router.get(
  "/v1/user/profile",
  userMiddleware.middleware,
  userController.profile,
);

export { router as userRoutes };
