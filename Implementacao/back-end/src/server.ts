import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes";

const PORT = 3000;
const app = express();
app.disable("x-powered-by");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando no link http://localhost:${PORT}`);
});
