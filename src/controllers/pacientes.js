const { Pacientes, Atendimentos } = require("../models/index.js");

const pacientesController = {
  listar: async (req, res) => {
    const listaDePacientes = await Pacientes.findAll();
    return res.status(200).json(listaDePacientes);
  },
  listarID: async (req, res) => {
    const { id } = req.params;

    const Paciente = await Pacientes.findByPk(id,{
      include: [
        { model: Atendimentos, attributes: { exclude: ["pacientes_id"] } },
      ],});

    if (!Paciente) {
      return res
        .status(404)
        .json(
          `O paciente de id ${id} não foi encontrado em nossos registros. Confira o ID e tente novamente`
        );
    }
    return res.status(200).json(Paciente);
  },

  cadastrar: async (req, res) => {
    const { nome, email, data_nascimento } = req.body;

    const novoPaciente = await Pacientes.create({
      nome,
      email,
      data_nascimento,
    });
    res.status(201).json(novoPaciente);
  },

  atualizar: async (req, res) => {
    const { id } = req.params;
    const { nome, email, data_nascimento } = req.body;
    let pacientes = await Pacientes.findByPk(id);

    if (!pacientes) {
      return res
        .status(404)
        .json(`O paciente ${id} não foi encontrado em nosso registro. Confira o ID e tente novamente.`);
    }

    await Pacientes.update({ nome, email, data_nascimento }, { where: { id } });

    const pacienteAtualizado = await Pacientes.findByPk(id);
    res.status(200).json(pacienteAtualizado);
  },
  deletar: async (req, res) => {
    const { id } = req.params;

    const paciente = await Pacientes.findByPk(id);

    if (!paciente) {
      res.status(404).json(`O paciente ${id} não foi encontrado em nosso registro. Confira o ID e tente novamente.`);
    }

    await Pacientes.destroy({
      where: {id}
    });

    res.status(204).send("");
  },
};

module.exports = pacientesController;
