import { Router } from "express";
import { deleteGoalController } from "../controllers/goals/deleteGoalController";
import { newGoalController } from "../controllers/goals/newGoalController";
import { newGoalMiddleware } from "../middlewares/newGoalMiddleware";

const route = Router();

route.post("/goal", newGoalMiddleware, newGoalController);
route.delete("/goal/:id", deleteGoalController);
route.get("/goal");

export default route;
