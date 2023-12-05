import { AppError } from "../errors/AppError";
import LivroServices from "../services/LivroServices";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const livros = await LivroServices.getLivros();
  res.json(livros);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const livro = await LivroServices.getById(Number(id));
  res.json(livro);
});

export { router as livroController };
