const db = require("../database");
const DataTypes = require("sequelize");

const Atendimentos = db.define(
  "Atendimentos",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data: {
      type: DataTypes.DATE,
    },

    observacao: {
      type: DataTypes.STRING,
    },
  },

  {
    tableName: "atendimentos",
  }
);

module.exports = Atendimentos;
