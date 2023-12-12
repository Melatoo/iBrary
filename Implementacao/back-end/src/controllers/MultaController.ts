import { Router } from "express";
import MultaServices from "../services/MultaServices";

const router = Router();

router.get("/", async (req, res) => {
  const multas = await MultaServices.getMultas();
  res.json(multas);
});

router.get("/:id", async (req, res) => {
  const multa = await MultaServices.getMultaById(Number(req.params.id));
  res.send(multa);
});

router.post("/add", async (req, res) => {
  const multa = {
    valor: Number(req.body.valor),
    idEmprestimo: Number(req.body.idEmprestimo),
  };
  res.send(await MultaServices.createMulta(multa));
});

router.patch("/update/:id", async (req, res) => {
  const multa = {
    valor: req.body.valor,
    idEmprestimo: req.body.idEmprestimo,
  };
  res.send(await MultaServices.updateMulta(Number(req.params.id), multa));
});

router.delete("/delete/:id", async (req, res) => {
  res.send(await MultaServices.deleteMulta(Number(req.params.id)));
});

export { router as multaController };
