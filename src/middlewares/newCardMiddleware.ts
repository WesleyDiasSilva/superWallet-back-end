import { NextFunction, Request, Response } from "express";
import { newCardModel } from "../models/newCardModel";

export function newCardMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): unknown {
  const { type, surname, payment_day, last_four_digits } = req.body;
  const validation = newCardModel.validate({
    type,
    surname,
    payment_day,
    last_four_digits,
  }, {abortEarly: false});
  if(validation.error) return res.status(400).send(validation.error)
  req.body.card = {type, surname, payment_day, last_four_digits};
  next()
}
