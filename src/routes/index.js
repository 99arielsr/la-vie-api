const express = require("express");
const routes = express.Router();

//controllers
const pacientesController = require("../controllers/pacientes");
const psicologoController = require("../controllers/psicologos")
const atendimentosController = require("../controllers/atendimentos");

//validators
const authValidator = require("../validators/auth/login");
const pacientesValidators = require("../validators/pacientes")

//Rotas Pacientes
routes.get("/pacientes", pacientesController.listar);
routes.get("/pacientes/:id", pacientesValidators.listarID, pacientesController.listarID);
routes.post("/pacientes", pacientesValidators.cadastrar ,pacientesController.cadastrar);
routes.put("/pacientes/:id", pacientesValidators.atualizar, pacientesController.atualizar);
routes.delete("/pacientes/:id", pacientesValidators.deletar, pacientesController.deletar);

//Rotas Psicologos
routes.get("/psicologos", psicologoController.listar);
routes.get("/psicologos/:id", psicologoController.listarID);
routes.post("/psicologos", psicologoController.cadastrar);
routes.put("/psicologos/:id", psicologoController.atualizar);
routes.delete("/psicologos/:id", psicologoController.deletar);

//login
routes.post("/psicologos/login", authValidator, psicologoController.login);

//Rotas Atendimento
routes.get("/atendimentos", atendimentosController.listar);
routes.get("/atendimentos/:id", atendimentosController.listarID);
routes.post("/atendimentos", atendimentosController.cadastrar);

module.exports = routes;
