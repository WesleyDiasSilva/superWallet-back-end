import Joi from "joi";

export const schemaNewTransaction = Joi.object({
  value: Joi.number().positive().required(),
  description: Joi.string().min(3).max(64).required(),
  type: Joi.string().valid("revenue", "expense").required(),
  fixed_variable: Joi.string().valid("fixed", "variable").required(),
  date: Joi.date().greater("01-01-2020").required(),
  reason: Joi.string().valid(
    "home",
    "food",
    "internet",
    "insurance",
    "transport",
    "car",
    "taxes or fees",
    "gym",
    "education",
    "employee",
    "signatures",
    "clothes",
    "trips",
    "candies",
    "fun"
  ),
});
