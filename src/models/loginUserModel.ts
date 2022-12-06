import Joi from "joi";

export const schemaLoginUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
