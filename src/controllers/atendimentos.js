const { Atendimentos } = require('../models/index.js');

const atendimentosController = {
  listar: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll();
    return res.status(200).json(listaDeAtendimentos);
  },
  listarID: async (req, res) => {
    const { id } = req.params;

    const atendimento = await Atendimentos.findByPk(id, { include: [{ all: true }] });

    if (!atendimento) {
      return res
        .status(404)
        .json(
          `O atendimento de id ${id} não foi encontrado em nossos registros. Confira o ID e tente novamente`
        );
    }
    return res.status(200).json(atendimento);
  },

  cadastrar: async (req, res) => {
    // const psicologos_id = pegar do token 
    const { data, observacao, pacientes_id, psicologos_id } = req.body;

    const novoAtendimento = await Atendimentos.create({
      data,
      observacao,
      pacientes_id,
      psicologos_id
    });
    res.status(201).json(novoAtendimento);
  },
}

module.exports = atendimentosController 