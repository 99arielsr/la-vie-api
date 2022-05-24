const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    return res.status(error.statusCode).json(error.details);
  }

  return res.status(error.status || 500).json(error);
};
