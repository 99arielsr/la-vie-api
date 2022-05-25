const { Atendimentos, Pacientes, Psicologos } = require("../models/index.js");

const dashboardController = {
  numPsicologos: async (req, res) => {

    const count = await Psicologos.count()

    return res.status(200).json(`Atualmente, há ${count} psicologos cadastrados`);
  },
  numAtendimentos: async (req, res) => {

    const count = await Atendimentos.count()

    return res.status(200).json(`Atualmente, há ${count} atendimentos cadastrados`);
  },
  numPacientes: async (req, res) => {

    const count = await Pacientes.count()

    return res.status(200).json(`Atualmente, há ${count} pacientes cadastrados`);
  },
  mediaAtendimentos: async (req, res) => {

    const countAtendimentos = await Atendimentos.count();
    const countPsicologos = await Psicologos.count();

    return res.status(200).json(`Atualmente, temos aproximadamente ${Math.round(countAtendimentos/countPsicologos)} atendimentos por psicólogo`);
  },
  
};

module.exports = dashboardController;
