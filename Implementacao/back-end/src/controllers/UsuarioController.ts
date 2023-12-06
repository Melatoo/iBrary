import UsuarioServices from "../services/UsuarioServices";
import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  const usuarios = await UsuarioServices.getUsuarios();
  res.json(usuarios);
});

router.delete("/delete/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  res.send(await UsuarioServices.deleteUsuario(id));
});

router.patch("/update/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = {
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    matricula: req.body.matricula,
  };
  res.send(await UsuarioServices.updateUsuario(id, usuario));
});

export { router as usuarioController };
