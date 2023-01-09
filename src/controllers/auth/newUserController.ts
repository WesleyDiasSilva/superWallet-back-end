import { NextFunction, Request, Response } from "express";
import { serviceCreateUser } from "../../services/users/serviceCreateUser";

export async function controllerNewUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password, image } = req.body;
  try {
    const {message, status} = await serviceCreateUser({
      name,
      email,
      password,
      image,
    });
    if (status) {
      return res.status(201).send(message);
    }
    return res.status(400).send(message);
  } catch {
    return res.sendStatus(500);
  }
}
