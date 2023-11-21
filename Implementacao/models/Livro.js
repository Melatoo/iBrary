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
    // Os campos createdAt e updatedAt são criados por padrão pelo sequelize
});

// Livro.sync({ force: true });

module.exports = Livro;
