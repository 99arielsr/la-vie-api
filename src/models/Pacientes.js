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
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },

  {
    tableName: "pacientes",
    timestamps: false,
  }
);

module.exports = Pacientes;
