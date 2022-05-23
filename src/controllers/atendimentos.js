const { Atendimentos } = require('../models/index.js');

const atendimentosController = {
  listar: (req, res) => {
    res.status(200).json("teste")
  },
  listarID: (req, res) => {
    res.status(200).json("teste")
  }
}

module.exports = atendimentosController 