let curtidasModel = require("../models/curtidasModel");

function curtir(req, res) {
  let fkUsuario = req.body.fkUsuario;
  let fkPost = req.body.fkPost;

  if (fkUsuario == undefined) {
    res.status(400).send("fkUsuario está undefined!");
  } else if (fkPost == undefined) {
    res.status(400).send("fkPost está undefined!");
  } else {
    curtidasModel
      .curtir(fkUsuario, fkPost)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao curtir", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function descurtir(req, res) {
  let fkUsuario = req.body.fkUsuario;
  let fkPost = req.body.fkPost;

  if (fkUsuario == undefined) {
    res.status(400).send("fkUsuario está undefined!");
  } else if (fkPost == undefined) {
    res.status(400).send("fkPost está undefined!");
  } else {
    curtidasModel
      .descurtir(fkUsuario, fkPost)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function totalCurtidas(req, res) {

    let idPost = req.params.idPost;

    curtidasModel
        .totalCurtidas(idPost)

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

function verificarCurtida(req, res) {

    let fkUsuario = req.params.fkUsuario;
    let fkPost = req.params.fkPost;

    curtidasModel
        .verificarCurtida(fkUsuario, fkPost)

        .then(function(resultado) {
            res.json(resultado);
        })

        .catch(function(erro) {
            res.status(500).json(
                erro.sqlMessage
            );
        });
}

module.exports = {
    curtir,
    descurtir,
    totalCurtidas,
    verificarCurtida
};

