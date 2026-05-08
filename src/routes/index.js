let express = require("express");
let router = express.Router();

let postsRouter = require("./posts")
let usuariosRouter = require("./usuarios");
let metricasRouter = require("./metricas");


router.use("/usuarios", usuariosRouter);
router.use("/posts", postsRouter);
router.use("/metricas", metricasRouter);
module.exports = router;