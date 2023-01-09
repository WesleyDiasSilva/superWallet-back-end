import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function middlewareAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(400).send({ message: "Token Invalid!" });
  }
  const token = authorization?.replace("Bearer ", "");
  try {
    const validationToken = jwt.verify(
      token ?? "",
      process.env.SECRET_JWT ?? ""
    );
    console.log(validationToken)
    req.body.user = validationToken;
    next();
  } catch (err){

    res.status(404).send("Token Invalid!");
  }
}
