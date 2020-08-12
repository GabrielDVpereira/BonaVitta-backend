import Joi from "@hapi/joi";
export const updateSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
});
export const createSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
});
