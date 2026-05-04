let express = require("express");
let router = express.Router();
let upload = require('../config/multer')
let postController = require("../controllers/postController");

router.post("/cadastrar", upload.single("imagem"), postController.cadastrar);

router.get("/listar", function (req, res) {
    postController.listar(req, res);
});

module.exports = router;