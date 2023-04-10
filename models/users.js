const { DataTypes } = require("sequelize");
const db = require("../database");

const User = db.define("user1", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
  },
});

// Cria a tabela se não existir
(async () => {
  db.sync()
    .then(() => {
      console.log("Tabela user1 criada com sucesso!");
    })
    .catch((error) => {
      console.error("Não foi possível criar a tabela : ", error);
    });
})();

module.exports = User;
