import EmprestimoService from "../services/EmprestimoService";
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
});

router.patch("/update/:id", async (req, res) => {
  const dadosEmprestimo = {
    dataDevolucao: req.body.dataDevolucao,
    livroId: req.body.livroId,
    usuarioId: req.body.usuarioId,
  };
  res.send(
    await EmprestimoService.updateEmprestimo(
      Number(req.params.id),
      dadosEmprestimo
    )
  );
});

router.delete("/delete/:id", async (req, res) => {
  res.send(await EmprestimoService.deleteEmprestimo(Number(req.params.id)));
});

export { router as emprestimoController };
