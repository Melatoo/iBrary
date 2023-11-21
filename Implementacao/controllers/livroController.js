const Livro = require("../models/Livro");

const createLivro = async (req, res) => {
    const livro = await Livro.create({
        nome: req.body.nome,
        editora: req.body.editora,
        autor: req.body.autor,
    }).catch((err) => {
        res.statusCode = 400;
        console.log(err);
    });
    res.end(JSON.stringify(livro));
};

const readLivro = async (req, res) => {
    const livro = await Livro.findByPk(req.params.id).catch((err) => {
        res.statusCode = 399;
        console.log(err);
    });
    res.end(JSON.stringify(livro));
};

const updateLivro = (req, res) => {
    if (JSON.stringify(req.body) !== "{}") {
        Livro.update(req.body, {
            where: {
                id: req.params.id,
            },
        }).catch((err) => {
            res.statusCode = 400;
            console.log(err);
        });
    } else res.statusCode = 400;
    res.end();
};

const deleteLivro = (req, res) => {
    Livro.destroy({
        where: {
            id: req.params.id,
        },
    }).catch((err) => {
        res.statusCode = 400;
        console.log(err);
    });
    res.end();
};

module.exports = { createLivro, readLivro, updateLivro, deleteLivro };
