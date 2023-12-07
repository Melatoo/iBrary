import EmprestimoService from "../services/EmprestimoService";
import LivroServices from "../services/LivroServices";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const emprestimos = await EmprestimoService.getEmprestimos();
  res.json(emprestimos);
});

router.get("/:id", async (req, res) => {
  const emprestimos = await EmprestimoService.getEmprestimoById(
    Number(req.params.id)
  );
  res.json(emprestimos);
});

router.post("/add", async (req, res) => {
  const dadosEmprestimo = {
    idLivro: req.body.idLivro,
    idAluno: req.body.idAluno,
  };
  res.send(await EmprestimoService.createEmprestimo(dadosEmprestimo));
  LivroServices.decrementLivro(dadosEmprestimo.idLivro);
});

router.patch("/update/:id", async (req, res) => {
  const dadosEmprestimo = {
    dataDevolucao: req.body.dataDevolucao,
    idLivro: req.body.idLivro,
    idAluno: req.body.idAluno,
  };
  res.send(
    await EmprestimoService.updateEmprestimo(
      Number(req.params.id),
      dadosEmprestimo
    )
  );
});

router.delete("/delete/:id", async (req, res) => {
  const emprestimo = await EmprestimoService.getEmprestimoById(
    Number(req.params.id)
  );
  LivroServices.incrementLivro(Number(emprestimo?.idLivro));
  res.send(await EmprestimoService.deleteEmprestimo(Number(req.params.id)));
});

export { router as emprestimoController };
