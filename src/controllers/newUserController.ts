import { NextFunction, Request, Response } from "express";
import { serviceCreateUser } from "../services/users/serviceCreateUser";

export async function controllerNewUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password, image } = req.body;
  try {
    const createUser = await serviceCreateUser({
      name,
      email,
      password,
      image,
    });
    if (createUser.status) {
      return res.status(201).send(createUser.message);
    }
    return res.status(400).send(createUser.message);
  } catch {
    return res.sendStatus(500);
  }
}
