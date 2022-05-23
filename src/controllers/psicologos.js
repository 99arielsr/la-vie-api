const {
    Psicologos
} = require('../models/index.js');

const psicologosController = {
    listar: (req, res) => {
        res.status(200).json("teste")
    },
    listarID: (req, res) => {
        res.status(200).json("teste")
    },

    cadastrar: (req, res) => {
        res.status(200).json("teste")
    },
    atualizar: (req, res) => {
        res.status(200).json("teste")
    },
    deletar: (req, res) => {
        res.status(200).json("teste")
    },
}

module.exports = psicologosController