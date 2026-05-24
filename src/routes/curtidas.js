let express = require("express");
let router = express.Router();
let curtidasController = require("../controllers/curtidasController");

router.post("/curtir", function (req, res) {
  curtidasController.curtir(req, res);
});

router.post("/descurtir", function (req, res) {
  curtidasController.descurtir(req, res);
});

router.get("/total/:idPost", function(req, res) {
    curtidasController.totalCurtidas(req, res);
});

router.get(
    "/verificar/:fkUsuario/:fkPost",

    function(req, res) {
        curtidasController.verificarCurtida(req, res);
    }
);

module.exports = router;