import { NextFunction, Request, Response } from "express";
import { authUser } from "../../interfaces/authUserInterface";
import { serviceDeleteGoal } from "../../services/goals/serviceDeleteGoal";

export async function deleteGoalController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  try {
    const { id } = req.params;
    const user: authUser = req.body.user;
    const { status, message } = await serviceDeleteGoal(
      Number(id),
      Number(user.id)
    );
    if (status) return res.status(200).send(message);
    return res.status(400).send(message);
  } catch {
    return res.sendStatus(500);
  }
}
