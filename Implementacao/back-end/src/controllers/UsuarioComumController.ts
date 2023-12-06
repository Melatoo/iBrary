import { Router } from "express";
import UsuarioServices from "../services/UsuarioServices";
const router = Router();

router.post("/add", async (req, res) => {
  const usuario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    matricula: req.body.matricula,
  };
  res.send(await UsuarioServices.createUsuario(usuario));
});

export { router as UsuarioComumController };
