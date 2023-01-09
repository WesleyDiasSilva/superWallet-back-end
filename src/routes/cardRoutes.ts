import { Router } from "express";
import { deleteCardController } from "../controllers/card/deleteCardController";
import { newCardController } from "../controllers/card/newCardController";
import { newCardMiddleware } from "../middlewares/newCardMiddleware";

const route = Router();

route.post("/card", newCardMiddleware, newCardController)
route.delete("/card/:id", deleteCardController)

export default route;