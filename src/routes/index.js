const express = require("express");
const routes = express.Router();

const pacientesController = require("../controllers/pacientes");
const psicologoController = require("../controllers/psicologos")
const atendimentosController = require("../controllers/atendimentos");
const auth = require("../middlewares/auth");

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

//login
routes.post("/psicologos/login", psicologoController.login);

//Rotas Atendimento
routes.get("/atendimentos", atendimentosController.listar);
routes.get("/atendimentos/:id", atendimentosController.listarID);
routes.post("/atendimentos", atendimentosController.cadastrar);

module.exports = routes;
