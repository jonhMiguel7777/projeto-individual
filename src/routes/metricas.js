let express = require("express");
let router = express.Router();



router.post("/cadastrar", function (req, res) {
    metricasController.cadastrar(req, res);
})