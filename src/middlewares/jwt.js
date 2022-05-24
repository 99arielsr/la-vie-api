var { expressjwt: expressJWT } = require("express-jwt");
const secret = require('../configs/secret');

module.exports = expressJWT({
  secret: secret.key,
  algorithms: ["HS256"],
});