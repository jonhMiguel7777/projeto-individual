var postModel = require("../models/postModel");

function cadastrar(req, res) {
    var titulo = req.body.tituloServer;
    var conteudo = req.body.conteudoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (titulo == undefined) {
        res.status(400).send("O título está undefined!");
    } else if (conteudo == undefined) {
        res.status(400).send("O conteúdo está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está undefined!");
    } else {
        postModel.cadastrar(titulo, conteudo, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao cadastrar o post! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    postModel.listar()
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.json(resultado);
                } else {
                    res.status(204).send("Nenhum post encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao listar os posts! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrar,
    listar
};