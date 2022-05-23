const { Psicologos } = require("../models/index.js");

const psicologosController = {
  listar: async (req, res) => {
    const listaDePsicologos = await Psicologos.findAll();

    return res.status(200).json(listaDePsicologos);
  },
  listarID: async (req, res) => {
    const { id } = req.params;

    const Psicologo = await Psicologos.findByPk(id, { include: [{ all: true }] });

    if (!Psicologo) {
        return res.status(404).json(`O psicólogo de id ${id} não foi encontrado em nossos registros. Confira o ID e tente novamente`)
    }

    return res.status(200).json(Psicologo);
  },

  cadastrar: async (req, res) => {
    const { nome, email, apresentacao, senha } = req.body;

    const novoPsicologo = await Psicologos.create({
        nome,
        email,
        apresentacao,
        senha,
    });

    res.status(201).json(novoPsicologo);
  },
  atualizar: (req, res) => {
    res.status(200).json("teste");
  },
  deletar: (req, res) => {
    res.status(200).json("teste");
  },
};

module.exports = psicologosController;
