import Joi from "joi";

export const newGoalModel = Joi.object({
  value: Joi.number().required().positive(),
  name: Joi.string().min(3).required(),
  type: Joi.string().valid("shared", "personal").required( )
})