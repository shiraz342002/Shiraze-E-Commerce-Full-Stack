import Joi from "joi";

export const UserValidationSchema = {
  register: {
    body: Joi.object().keys({
      name: Joi.string().trim().required().min(3).max(14).messages({
        "string.base": "Name should be a type of 'text'",
        "string.empty": "Name cannot be empty",
        "string.min": "Name should have a minimum length of 3 characters",
        "string.max": "Name should have a maximum length of 14 characters",
        "any.required": "Name is required",
      }),
      email: Joi.string().trim().email().required().messages({
        "string.email": "Email must be a valid email",
        "string.empty": "Email cannot be empty",
        "any.required": "Email is required",
      }),
      password: Joi.string().trim().required().min(8).messages({
        "string.min": "Password should have a minimum length of 8 characters",
        "string.empty": "Password cannot be empty",
        "any.required": "Password is required",
      }),
    }),
  },
  login: {
    body: Joi.object().keys({
      email: Joi.string().trim().email().required().messages({
        "string.email": "Email must be a valid email",
        "string.empty": "Email cannot be empty",
        "any.required": "Email is required",
      }),
      password: Joi.string().trim().min(8).required().messages({
        "string.min": "Password should have a minimum length of 8 characters",
        "string.empty": "Password cannot be empty",
        "any.required": "Password is required",
      }),
    }),
  },
  update: {
    body: Joi.object().keys({
      name: Joi.string().trim().min(3).max(14).optional().messages({
        "string.base": "Name should be a type of 'text'",
        "string.min": "Name should have a minimum length of 3 characters",
        "string.max": "Name should have a maximum length of 14 characters",
      }),
      email: Joi.string().trim().email().optional().messages({
        "string.email": "Email must be a valid email",
      }),
      password: Joi.string().trim().min(8).optional().messages({
        "string.min": "Password should have a minimum length of 8 characters",
      }),
    }),
  },
};
