const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    data_nascimento: Joi.date().max('12-31-2020'),
  }),
});