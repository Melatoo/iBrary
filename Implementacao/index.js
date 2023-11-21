const express = require("express");
const app = express();
const livro = require("./routes/livroRoute");
const { sequelize } = require("./models/db");

// configurações
app.use(express.json()); // configura json como content-type esperado em requisições

// rotas
app.use("/livro", livro);

sequelize
    .authenticate()
    .then(() => console.log("conectado ao banco de dados com sucesso!"))
    .catch((err) => console.log(err));

app.listen(3000, () => console.log("servidor iniciado"));
