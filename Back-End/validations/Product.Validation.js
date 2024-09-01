import Joi from 'joi';

const productValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).max(500).required(),
  price: Joi.number().min(0).required(),
  image: Joi.array().items(Joi.string().uri()).required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  sizes: Joi.array().items(Joi.string()).required(),
  date: Joi.date().iso(),
  bestseller: Joi.boolean(),
});

export default productValidationSchema;
