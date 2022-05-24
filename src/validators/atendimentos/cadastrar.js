const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    data: Joi.datetime().required(),
    observacao: Joi.string().required(),
    pacientes_id: Joi.number().integer().required(),
    psicologos_id: Joi.number().integer().required(),
  }),
});