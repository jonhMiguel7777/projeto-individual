let metricasModel = require("../models/metricasModel");

function buscarMetricas(req, res) {
    let idUsuario = req.query.idUsuario;

    if (!idUsuario) {
        return res.status(400).send("ID do usuário é obrigatório.");
    }

    metricasModel.buscarMetricas(idUsuario)
        .then(function(resultado) {
            res.status(200).json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrarEvento(req, res) {
    let nomeEvento = req.body.nomeEventoServer;
    let qtdPessoas = req.body.qtdPessoasServer;
    let dataEvento = req.body.dataEventoServer;
    let fk_usuario = req.body.fkUsuarioServer;

    if (!nomeEvento || !qtdPessoas || !dataEvento || !fk_usuario) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }

    metricasModel.cadastrarEvento(nomeEvento, qtdPessoas, dataEvento, fk_usuario)
        .then(function(resultado) {
            res.status(201).json({ mensagem: "Evento cadastrado com sucesso!", resultado });
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = { buscarMetricas, cadastrarEvento };