const db = require("../database");
const DataTypes = require("sequelize");

const Pacientes = db.define(
  "Pacientes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    data_nascimento: {
      type: DataTypes.DATE,
    },
  },

  {
    tableName: "pacientes",
  }
);

module.exports = Pacientes;
