import Joi from 'joi';

const schema = {
    user:Joi.object({
        firstName:Joi.string().min(3).max(30).required(),
        lastName:Joi.string().min(3).max(30).required(),
        email:Joi.string().email().required(),
        password:Joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required(),
        phone:Joi.number().integer().min(100000000).message("Invalide Phone number").max(9999999999),
        is_active:Joi.number(),
        r_id:Joi.number()
    }),
};
module.exports = schema;
 
