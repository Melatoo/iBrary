import { NextFunction, Request, Response, Router } from "express";
import { livroController } from "./controllers/LivroController";
import { AppError } from "./errors/AppError";
import { usuarioController } from "./controllers/UsuarioController";
import { multaController } from "./controllers/MultaController";

const router = Router();

router.use("/admin/livros", livroController);
router.use("/admin/alunos", usuarioController);
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
