import Joi from "@hapi/joi";
export const updateSchema = Joi.object({
  name: Joi.string(),
  amount: Joi.number(),
  priceWholesale: Joi.number(),
  priceReail: Joi.number(),
  priceDistributor: Joi.number(),
  category: Joi.string(),
});
export const createSchema = Joi.object({
  name: Joi.string().required(),
  amount: Joi.number().required(),
  priceWholesale: Joi.number().required(),
  priceReail: Joi.number().required(),
  priceDistributor: Joi.number().required(),
  category: Joi.string().required(),
});
