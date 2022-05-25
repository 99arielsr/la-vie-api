const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome: Joi.string().required(),
    email: Joi.string().email().required(),
    data_nascimento: Joi.date().required(),
  }),
});