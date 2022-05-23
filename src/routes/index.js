const express = require("express");
const routes = express.Router();

const pacientesController = require("../controllers/pacientes");
const psicologoController = require("../controllers/psicologos");
const atendimentosController = require("../controllers/atendimentos");

//Rotas Pacientes
routes.get("/pacientes", pacientesController.listar);
routes.get("/pacientes/:id", pacientesController.listarID);
routes.post("/pacientes", pacientesController.cadastrar);
routes.put("/pacientes/:id", pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesController.deletar);

//Rotas Psicologos
routes.get("/psicologos", psicologoController.listar);
routes.get("/psicologos/:id", psicologoController.listarID);
routes.post("/psicologos", psicologoController.cadastrar);
routes.put("/psicologos/:id", psicologoController.atualizar);
routes.delete("/psicologos/:id", psicologoController.deletar);

//Rotas Atendimento
routes.get("/atendimentos", atendimentosController.listar);
routes.get("/atendimentos/:id", atendimentosController.listarId);

module.exports = routes;
