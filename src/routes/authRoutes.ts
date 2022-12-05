import { Router } from "express";
import { controllerNewUser } from "../controllers/newUserController";
import { middlewareNewUser } from "../middlewares/newUserMiddleware";

const route = Router();

route.post("/user", middlewareNewUser, controllerNewUser);
route.post("/auth");

export default route;
