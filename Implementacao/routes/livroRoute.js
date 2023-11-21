const express = require("express");
const Livro = require("../models/Livro");
const router = express.Router();

router.post("/create", (req, res) => {
    Livro.create({
        nome: req.body.nome,
        editora: req.body.editora,
        autor: req.body.autor,
    }).catch((err) => {
        res.statusCode = 400;
        console.log(err);
    });
    res.end();
});

router.get("/read/:id", async (req, res) => {
    const livro = await Livro.findByPk(req.params.id).catch((err) => {
        res.statusCode = 400;
        console.log(err);
    });
    res.end(JSON.stringify(livro));
});

router.post("/update/:id", (req, res) => {
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
});

router.get("/delete/:id", (req, res) => {
    Livro.destroy({
        where: {
            id: req.params.id,
        },
    }).catch((err) => {
        res.statusCode = 400;
        console.log(err);
    });
    res.end();
});

module.exports = router;
