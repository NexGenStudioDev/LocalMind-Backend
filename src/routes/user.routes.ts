import { Router } from "express";
import userController from "../api/user/v1/user.controller";
import userMiddleware from "../api/user/v1/user.middleware";

const router: Router = Router();

router.post(
    "/v1/user/register", 
    userController.register
);


router.post(
    "/v1/user/login",
    userController.login
)

router.get(
    "/v1/user/profile",
    userMiddleware.middleware,
    userController.profile
)

router.get(
    "/v1/user/get-api-key",
    userMiddleware.middleware,
    userController.apiEndPointCreater
)

export {router as userRoutes};

