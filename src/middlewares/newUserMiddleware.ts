import { NextFunction, Request, Response } from "express";
import { schemaNewUser } from "../models/newUserModel";

export function middlewareNewUser(
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
  next()
}
