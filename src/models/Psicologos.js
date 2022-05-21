const db = require("../database");
const DataTypes = require("sequelize");

const Pscicologos = db.define(
  "Piscicologos",
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
    apresentacao: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
  },

  {
    tableName: "psicologos",
  }
);

module.exports = Pscicologos;
