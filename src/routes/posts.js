var express = require("express");
var router = express.Router();

var postController = require("../controllers/postController");

router.post("/cadastrar", function (req, res) {
    postController.cadastrar(req, res);
})

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

module.exports = router;