const express = require("express");
const Livro = require("../models/Livro");
const router = express.Router();

router.post("/add", (req, res) => {
    Livro.create({
        nome: req.body.nome,
        editora: req.body.editora,
        autor: req.body.autor,
    })
        .catch((err) => {
            res.statusCode = 400;
            console.log(err);
        })
        .finally(() => res.end());
});

router.get("/remove/:id", (req, res) => {
    Livro.destroy({
        where: {
            id: req.params.id,
        },
    })
        .catch((err) => {
            res.statusCode = 400;
            console.log(err);
        })
        .finally(() => res.end());
});

module.exports = router;
