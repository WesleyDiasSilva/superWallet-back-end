import { Router } from "express";
import { newCardController } from "../controllers/card/newCardController";
import { newCardMiddleware } from "../middlewares/newCardMiddleware";

const route = Router();

route.post("/card", newCardMiddleware, newCardController)

export default route;