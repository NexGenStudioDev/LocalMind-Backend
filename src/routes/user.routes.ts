import { Router } from "express";
import userController from "../api/user/v1/user.controller";

const router: Router = Router();

router.post("/v1/user/register", userController.register);


router.post(
    "/v1/user/login",
    userController.login
)

export {router as userRoutes};

