const { sequelize, Sequelize } = require("./db");

const Livro = sequelize.define("livro", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    editora: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dataCadastro: {
        type: Sequelize.DATE,
        allowNull: false,
    },
});

// Livro.sync({ force: true });

module.exports = Livro;
