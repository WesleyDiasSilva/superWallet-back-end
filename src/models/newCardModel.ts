import Joi from "joi";

export const newCardModel = Joi.object({
  surname: Joi.string().min(3).required(),
  payment_day: Joi.number().min(1).required(),
  last_four_digits: Joi.string().min(4).max(4).required(),
  type: Joi.string().valid("Credit", "Debit","Credit and Debit")
})