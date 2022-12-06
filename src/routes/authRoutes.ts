import { Router } from "express";
import { controllerLogin } from "../controllers/loginController";
import { controllerNewUser } from "../controllers/newUserController";
import { middlewareLogin } from "../middlewares/loginUserMiddleware";
import { middlewareNewUser } from "../middlewares/newUserMiddleware";

const route = Router();

route.post("/user", middlewareNewUser, controllerNewUser);
route.post("/auth", middlewareLogin, controllerLogin);

export default route;
