import MultaServices from "../services/MultaServices";
import { Router } from "express";

const router = Router();

// listar emprestimos.....

router.post("/add", async (req, res) => {
  const multa = {
    valor: req.body.valor,
    idEmprestimo: req.body.idEmprestimo,
  };
  res.send(await MultaServices.createMulta(multa));
});

export { router as multasUsuarioController };
