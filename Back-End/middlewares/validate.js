
import Joi from 'joi'
import pick from '../utils/pick.js'

const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' }, abortEarly: false })
        .validate(object);

    if (error) {
        return  res.status(400).json({ message: error.details.map(detail => detail.message).join(', ') });
    }
    Object.assign(req, value);
    return next();
};

export default validate;
