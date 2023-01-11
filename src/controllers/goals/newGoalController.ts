import { Request, Response } from "express";
import { authUser } from "../../interfaces/authUserInterface";
import { serviceCreateGoal } from "../../services/goals/serviceCreateGoal";

export async function newGoalController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { type, value, name } = req.body.goal;
    const user: authUser = req.body.user;
    const { status, message } = await serviceCreateGoal(
      type,
      name,
      Number(value),
      user.id
    );
    if (status) return res.sendStatus(201);
    return res.status(404).send(message);
  } catch (err) {
    return res.status(500).send("Try again!");
  }
}
