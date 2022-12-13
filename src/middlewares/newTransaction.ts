import { NextFunction, Request, Response } from "express";
import { schemaNewTransaction } from "../models/newTransactionModel";

export function middlewareNewTransaction(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { value, description, type, fixed_variable, date, reason } = req.body;
  const validation = schemaNewTransaction.validate(
    {
      value: value,
      description,
      type,
      fixed_variable,
      date,
      reason,
    },
    { abortEarly: false }
  );
  if (validation.error) {
    return res.status(404).send(validation.error);
  }
  req.body.locals = { value, description, type, fixed_variable, date, reason }
  next();
}
