const express = require("express");
const app = express();
const livro = require("./routes/livro");

// configurações
app.use(express.json()); // configura json como content-type esperado em requisições

// rotas
app.use("/livro", livro);

app.listen(3000, () => console.log("servidor iniciado"));
