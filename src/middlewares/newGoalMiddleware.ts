import { NextFunction, Request, Response } from "express";
import { newGoalModel } from "../models/newGoal";

export function newGoalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): unknown {
  try {
    const { value, name, type } = req.body;
    const validation = newGoalModel.validate(
      { value, name, type },
      { abortEarly: false }
    );
    if (validation.error) return res.status(404).send(validation.error);
    req.body.goal = { value, name, type };
    next();
  } catch {
    return res.sendStatus(500);
  }
}
