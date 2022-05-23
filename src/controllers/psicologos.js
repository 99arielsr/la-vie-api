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
  atualizar: async (req, res) => {
    const { id } = req.params;
    const { nome, email, apresentacao, senha } = req.body;
    let psicologos = await Psicologos.findByPk(id);

    if (!psicologos) {
      return res
        .status(404)
        .json(`O psicologo ${id} não foi encontrado em nosso registro. Confira o ID e tente novamente.`);
    }

    await Psicologos.update({ nome, email, apresentacao, senha }, { where: { id } });

    const pacienteAtualizado = await Psicologos.findByPk(id);
    res.status(200).json(pacienteAtualizado);
  },
  deletar: async (req, res) => {
    const { id } = req.params;

    const psicologo = await Psicologos.findByPk(id);

    if (!psicologo) {
      res.status(404).json(`O psicologo ${id} não foi encontrado em nosso registro. Confira o ID e tente novamente.`);
    }

    await Psicologos.destroy({
      where: {id}
    });

    res.status(204).send("");
  },
};

module.exports = psicologosController;
