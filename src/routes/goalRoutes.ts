import { Router } from "express";
import { newGoalController } from "../controllers/goals/newGoalController";
import { newGoalMiddleware } from "../middlewares/newGoalMiddleware";

const route = Router();

route.post("/goal", newGoalMiddleware, newGoalController);
route.delete("/goal");
route.get("/goal");

export default route;
