import { Request, Response } from "express";
import { serviceFindUser } from "../../services/users/serviceFindUser";
import { serviceLogin } from "../../services/users/serviceLoginUser";

export async function controllerLogin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await serviceFindUser(email);
    if (!user.message || !user.status) {
      return res.status(400).send("E-mail not found!");
    }
    const responseLogin = await serviceLogin(user.message, password);
    if (responseLogin.status) {
      return res.status(200).send("Bearer "+responseLogin.message);
    }
  } catch {
    res.sendStatus(500);
  }
}
