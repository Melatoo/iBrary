import LivroServices from "../services/LivroServices";
import { Router } from "express";
const router = Router();

// *
router.get("/", async (req, res) => {
  const livros = await LivroServices.getLivros();
  res.json(livros);
});

router.get("/:id", async (req, res) => {
  const livro = await LivroServices.getLivroById(Number(req.params.id));
  res.send(livro);
});

router.post("/add", async (req, res) => {
  const dadosLivro = {
    nome: req.body.nome,
    editora: req.body.editora,
    autor: req.body.autor,
    quantidade: Number(req.body.quantidade),
  };
  res.send(await LivroServices.createLivro(dadosLivro));
});

router.patch("/update/:id", async (req, res) => {
  const dadosLivro = {
    nome: req.body.nome,
    editora: req.body.editora,
    autor: req.body.autor,
    quantidade: Number(req.body.quantidade),
  };
  res.send(await LivroServices.updateLivro(Number(req.params.id), dadosLivro));
});

router.delete("/delete/:id", async (req, res) => {
  res.send(await LivroServices.deleteLivro(Number(req.params.id)));
});

export { router as livroController };
