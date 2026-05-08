let metricasController = require("../controllers/metricasController");
let express = require("express");
let router = express.Router();

router.get("/buscarMetricas", function (req, res) {
    metricasController.buscarMetricas(req, res);
});

module.exports = router;