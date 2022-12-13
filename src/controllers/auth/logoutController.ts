import { Request, Response } from "express";
import { serviceDeleteSession } from "../../services/sessions/serviceDeleteSession";

export async function controllerLogout(req: Request, res: Response) {
  try {
    const { user } = req.body;
    const deleteSession = await serviceDeleteSession(user.email);
    if (deleteSession.status) {
      return res.sendStatus(200);
    }
    return res.sendStatus(400);
  } catch {
    return res.sendStatus(500);
  }
}
