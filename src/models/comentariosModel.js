let database = require("../database/config");

function cadastrar(
    texto,
    fkUsuario,
    fkPost,
    fkComentarioPai
) {

    let instrucaoSql = `

        INSERT INTO comentarios
        (
            texto,
            fk_usuario,
            fk_post,
            fk_comentarioPai
        )

        VALUES
        (
            '${texto}',
            ${fkUsuario},
            ${fkPost},
            ${fkComentarioPai || null}
        );
    `;

    console.log(instrucaoSql);

    return database.executar(
        instrucaoSql
    );
}

function listarPorPost(idPost) {

    let instrucaoSql = `

        SELECT

            comentarios.id,

            comentarios.texto,

            comentarios.dataComentario,

            comentarios.fk_comentarioPai
                AS fkComentarioPai,

            usuario.nome

        FROM comentarios

        JOIN usuario
            ON usuario.id =
            comentarios.fk_usuario

        WHERE comentarios.fk_post =
        ${idPost}

        ORDER BY
        comentarios.dataComentario ASC;
    `;

    console.log(instrucaoSql);

    return database.executar(
        instrucaoSql
    );
}

module.exports = {
    cadastrar,
    listarPorPost
};