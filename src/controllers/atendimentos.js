const { Atendimentos, Pacientes, Psicologos } = require("../models/index.js");
const base64 = require('base-64');
const utf8 = require('utf8');

const atendimentosController = {
  listar: async (req, res) => {
    const listaDeAtendimentos = await Atendimentos.findAll({
      include: [{ model: Pacientes, attributes: ["nome"] },{ model: Psicologos, attributes: ["nome"] }],
    });
    return res.status(200).json(listaDeAtendimentos);
  },
  listarID: async (req, res) => {
    const { id } = req.params;

    const atendimento = await Atendimentos.findByPk(id, {
      include: [Pacientes, { model: Psicologos, attributes: { exclude: ["senha"] } }],
    });

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
    const token = req.headers.authorization.slice(7).split(".")
    const bytes = base64.decode(token[1]);
    const text = utf8.decode(bytes);
    const tokenInfo = JSON.parse(text);
    const psicologos_id = tokenInfo.id
   
    const { data, observacao, pacientes_id } = req.body;

    const novoAtendimento = await Atendimentos.create({
      data,
      observacao,
      pacientes_id,
      psicologos_id,
    });
    res.status(201).json(novoAtendimento);
  },
};

module.exports = atendimentosController;
