const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nome: Joi.string(),
    email: Joi.string().email(),
    apresentacao: Joi.string(),
    senha: Joi.string().min(6), 
  }),
});