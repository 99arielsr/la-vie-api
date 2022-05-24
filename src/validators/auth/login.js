const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
  }),
});