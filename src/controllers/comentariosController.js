let comentarioModel = require("../models/comentariosModel");

function cadastrar(req, res) {

    let texto = req.body.textoServer;
    let fkUsuario = req.body.fkUsuarioServer;
    let fkPost = req.body.fkPostServer;

    let fkComentarioPai =
        req.body.fkComentarioPaiServer;

    comentarioModel.cadastrar(
        texto,
        fkUsuario,
        fkPost,
        fkComentarioPai
    )
    .then(function(resultado) {
        res.json(resultado);
    })
    .catch(function(erro) {
        console.log(erro);

        res.status(500).json(
            erro.sqlMessage
        );
    });
}

function listarPorPost(req, res) {
  let idPost = req.params.idPost;

  comentarioModel
    .listarPorPost(idPost)

    .then(function (resultado) {
      res.json(resultado);
    })

    .catch(function (erro) {
      console.log(erro);

      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  cadastrar,
  listarPorPost,
};
