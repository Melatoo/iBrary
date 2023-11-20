const express = require("express");

const app = express();
app.use(express.json()); // configura json como content-type esperado em requisições

app.listen(3000);
