import Joi from "joi";

const deliveryValidationSchema = Joi.object({
    first_name: Joi.string()
        .max(20)
        .required()
        .messages({
            "string.base": "First name should be a type of text",
            "string.max": "First name should have a maximum length of 20 characters",
            "any.required": "First name is required",
        }),
    last_name: Joi.string()
        .max(20)
        .required()
        .messages({
            "string.base": "Last name should be a type of text",
            "string.max": "Last name should have a maximum length of 20 characters",
            "any.required": "Last name is required",
        }),
    email: Joi.string()
        .email()
        .max(20)
        .required()
        .messages({
            "string.base": "Email should be a type of text",
            "string.email": "Email must be a valid email address",
            "string.max": "Email should have a maximum length of 20 characters",
            "any.required": "Email is required",
        }),
    street: Joi.string()
        .max(50)
        .required()
        .messages({
            "string.base": "Street should be a type of text",
            "string.max": "Street should have a maximum length of 50 characters",
            "any.required": "Street is required",
        }),
    city: Joi.string()
        .max(50)
        .required()
        .messages({
            "string.base": "City should be a type of text",
            "string.max": "City should have a maximum length of 50 characters",
            "any.required": "City is required",
        }),
    state: Joi.string()
        .max(50)
        .required()
        .messages({
            "string.base": "State should be a type of text",
            "string.max": "State should have a maximum length of 50 characters",
            "any.required": "State is required",
        }),
    zipcode: Joi.string()
        .max(10)
        .required()
        .messages({
            "string.base": "Zipcode should be a type of text",
            "string.max": "Zipcode should have a maximum length of 10 characters",
            "any.required": "Zipcode is required",
        }),
    country: Joi.string()
        .max(50)
        .required()
        .messages({
            "string.base": "Country should be a type of text",
            "string.max": "Country should have a maximum length of 50 characters",
            "any.required": "Country is required",
        }),
    phone: Joi.string()
        .max(15)
        .required()
        .messages({
            "string.base": "Phone should be a type of text",
            "string.max": "Phone should have a maximum length of 15 characters",
            "any.required": "Phone is required",
        }),
});

export default deliveryValidationSchema;
