import { Router } from "express";
import { controllerLogin } from "../controllers/auth/loginController";
import { controllerLogout } from "../controllers/auth/logoutController";
import { controllerNewUser } from "../controllers/auth/newUserController";
import { middlewareAuth } from "../middlewares/authUserMiddleware";
import { middlewareLogin } from "../middlewares/loginUserMiddleware";
import { middlewareNewUser } from "../middlewares/newUserMiddleware";

const route = Router();

route.post("/user", middlewareNewUser, controllerNewUser);
route.post("/auth", middlewareLogin, controllerLogin);
route.delete("/logout", middlewareAuth, controllerLogout)

export default route;
