import { NextFunction, Request, Response } from "express";
import { schemaLoginUser } from "../models/loginUserModel";
import { findUser } from "../repositories/user/repositoryFindUser";

export async function middlewareLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body;

  const validation = schemaLoginUser.validate(
    { email, password },
    { abortEarly: false }
  );

  if (validation.error) {
    return res.status(400).send(validation.error);
  }
  next();
}
