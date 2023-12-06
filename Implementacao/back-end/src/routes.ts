import { NextFunction, Request, Response, Router } from "express";
import { livroController } from "./controllers/LivroController";
import { AppError } from "./errors/AppError";
import { usuarioController } from "./controllers/UsuarioController";
import { emprestimoController } from "./controllers/EmprestimoController";
import { multaController } from "./controllers/MultaController";
import { livroUsuarioController } from "./controllers/LivroUsuarioController";
import { multasUsuarioController } from "./controllers/MultasUsuarioController";
import { UsuarioComumController } from "./controllers/UsuarioComumController";

const router = Router();

router.use("/livros", livroUsuarioController);
router.use("/alunos", UsuarioComumController);
router.use("/emprestimos", multasUsuarioController);
router.use("/admin/livros", livroController);
router.use("/admin/alunos", usuarioController);

router.use("/admin/emprestimos", emprestimoController);
router.use("/admin/multas", multaController);

router.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        body: err.body,
      });
    }

    return response.status(500).json({
      status: "Error",
      body: `Internal server error ${err.message}`,
    });
  }
);

export { router };
