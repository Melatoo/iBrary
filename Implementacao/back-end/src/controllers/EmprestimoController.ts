import EmprestimoPersistance from "../persistence/EmprestimoPersistance";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const emprestimos = await EmprestimoPersistance.getEmprestimos();
  res.json(emprestimos);
});

router.get("/:id", async (req, res) => {
  const emprestimos = await EmprestimoPersistance.getEmprestimosById(
    Number(req.params.id)
  );
  res.json(emprestimos);
});

router.post("/add", async (req, res) => {
  const dadosEmprestimo = {
    idLivro: req.body.idLivro,
    idAluno: req.body.idAluno,
  };
  res.send(await EmprestimoPersistance.createEmprestimo(dadosEmprestimo));
});

router.patch("/update/:id", async (req, res) => {
  const dadosEmprestimo = {
    dataDevolucao: req.body.dataDevolucao,
    livroId: req.body.livroId,
    usuarioId: req.body.usuarioId,
  };
  res.send(
    await EmprestimoPersistance.updateEmprestimo(
      Number(req.params.id),
      dadosEmprestimo
    )
  );
});

router.delete("/delete/:id", async (req, res) => {
  res.send(await EmprestimoPersistance.deleteEmprestimo(Number(req.params.id)));
});

export { router as emprestimoController };
