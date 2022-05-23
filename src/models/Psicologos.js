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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    apresentacao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    tableName: "psicologos",
  }
);

module.exports = Pscicologos;
