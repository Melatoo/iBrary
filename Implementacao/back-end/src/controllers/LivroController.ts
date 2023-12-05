import { AppError } from "../errors/AppError";
import LivroServices from "../services/LivroServices";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const livros = await LivroServices.getLivros();
  res.json(livros);
});

export { router as livroController };
