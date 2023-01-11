import { Request, Response } from "express";
import { authUser } from "../../interfaces/authUserInterface";
import { serviceGetGoals } from "../../services/goals/serviceGetGoals";

export async function getAllGoalsController(req: Request, res: Response): Promise<Response>{
  try{
    const user: authUser = req.body.user;
    const {status, message} = await serviceGetGoals(Number(user.id))
    return res.status(200).send(message)
  }catch{
    return res.sendStatus(500);
  }
}