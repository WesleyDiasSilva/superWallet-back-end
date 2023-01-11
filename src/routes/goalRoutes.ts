import { Router } from "express";
import { deleteGoalController } from "../controllers/goals/deleteGoalController";
import { getAllGoalsController } from "../controllers/goals/getAllGoals";
import { newGoalController } from "../controllers/goals/newGoalController";
import { newGoalMiddleware } from "../middlewares/newGoalMiddleware";

const route = Router();

route.post("/goal", newGoalMiddleware, newGoalController);
route.delete("/goal/:id", deleteGoalController);
route.get("/goal", getAllGoalsController);

export default route;
