let postModel = require("../models/postModel");

function listar(req, res) {

    postModel.listar()
        .then(function(resultado) {
            res.json(resultado);
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function cadastrar(req, res) {

    let titulo = req.body.tituloServer;
    let conteudo = req.body.conteudoServer;
    let imagem = null;
    let fk_usuario = req.body.fkUsuarioServer;

    if (req.file) {
    imagem = req.file.filename;
    }
    
    postModel.cadastrar(
        titulo,
        conteudo,
        imagem,
        fk_usuario
    )
    .then(function(resultado) {
        res.json(resultado);
    })
    .catch(function(erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function deletar(req, res) {
    let idPost    = req.params.idPost;
    // idUsuario vem como query param: /posts/deletar/5?idUsuario=2
    let idUsuario = req.query.idUsuario;

    if (!idPost || !idUsuario) {
        return res.status(400).send("ID do post e do usuário são obrigatórios.");
    }

    postModel.deletar(idPost, idUsuario)
        .then(function(resultado) {
            if (resultado.affectedRows === 0) {
                return res.status(403).send("Você não tem permissão para deletar este post.");
            }
            res.json({ mensagem: "Post deletado com sucesso!" });
        })
        .catch(function(erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listar,
    cadastrar,
    deletar
};