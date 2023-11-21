const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

router.post("/create", livroController.createLivro);
router.get("/read/:id", livroController.readLivro);
router.post("/update/:id", livroController.updateLivro);
router.get("/delete/:id", livroController.deleteLivro);

module.exports = router;
