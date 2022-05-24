module.exports = validate({
    params: Joi.object({
      id: Joi.number().integer().required(),
    }),
  });