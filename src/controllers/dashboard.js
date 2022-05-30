const { Atendimentos, Pacientes, Psicologos } = require("../models/index.js");

const dashboardController = {
  numPsicologos: async (req, res) => {
    const count = await Psicologos.count();

    return res.status(200).json(count);
  },
  numAtendimentos: async (req, res) => {
    const count = await Atendimentos.count();

    return res.status(200).json(count);
  },
  numPacientes: async (req, res) => {
    const count = await Pacientes.count();

    return res.status(200).json(count);
  },
  mediaAtendimentos: async (req, res) => {
    const countAtendimentos = await Atendimentos.count();
    const countPsicologos = await Psicologos.count();

    return res
      .status(200)
      .json(Math.round(countAtendimentos / countPsicologos));
  },
};

module.exports = dashboardController;
