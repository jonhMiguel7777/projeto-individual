let express = require("express");

let router = express.Router();

let comentarioController = require("../controllers/comentariosController");

router.post("/cadastrar", function (req, res) {
  comentarioController.cadastrar(req, res);
});

router.get("/listar/:idPost", function (req, res) {
  comentarioController.listarPorPost(req, res);
});

module.exports = router;