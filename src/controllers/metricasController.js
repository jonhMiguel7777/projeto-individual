let metricasModel = require("../models/metricasModel");

function buscarMetricas(req, res) {

    metricasModel.buscarMetricas()
        .then(function(resultado) {
            res.status(200).json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as métricas", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarMetricas
}