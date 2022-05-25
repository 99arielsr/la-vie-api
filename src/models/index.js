//importação dos arquivos da psta models
const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");


Psicologos.hasMany(Atendimentos, {
  foreignKey: 'psicologos_id'
});
Atendimentos.belongsTo(Psicologos, {
  foreignKey: 'psicologos_id'
});

Pacientes.hasMany(Atendimentos, {
  foreignKey: 'pacientes_id'
});
Atendimentos.belongsTo(Pacientes, {
    foreignKey: 'pacientes_id'
});

module.exports = {
  Psicologos,
  Pacientes,
  Atendimentos
}