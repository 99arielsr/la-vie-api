module.exports = (req, res, next) => {
  console.log(`O ip: ${req.ip} acessou a rota: ${req.originalUrl}`);

  next();
};
