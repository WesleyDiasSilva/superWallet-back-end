import { NextFunction, Request, Response } from "express";
import { schemaNewUser } from "../models/newUserModel";
import { findUser } from "../repositories/user/repositoryFindUser";

export async function middlewareNewUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { name, email, password, image } = req.body;
  const validation = schemaNewUser.validate(
    { name, email, password, image },
    { abortEarly: false }
  );
  if (validation.error) {
    return res.status(400).send(validation.error);
  }

  try {
    const userFound = await findUser(email);
    if (userFound.message) {
      return res.status(401).send("E-mail already registred!");
    }
  } catch {}
  next();
}
