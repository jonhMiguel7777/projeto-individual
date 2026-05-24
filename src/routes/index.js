let express = require("express");
let router = express.Router();

let postsRouter = require("./posts")
let usuariosRouter = require("./usuarios");
let metricasRouter = require("./metricas");
let comentariosRouter = require("./comentarios");
let curtidasRouter = require("./curtidas");


router.use("/usuarios", usuariosRouter);
router.use("/posts", postsRouter);
router.use("/metricas", metricasRouter);
router.use("/comentarios", comentariosRouter);
router.use("/curtidas", curtidasRouter);
module.exports = router;