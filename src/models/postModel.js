let database = require("../database/config");

function listar() {

    let instrucaoSql = `
        SELECT
            post.id,
            post.titulo,
            post.conteudo,
            post.dataPost,
            post.imagem,
            post.fk_usuario,

            usuario.nome AS autor,

            COUNT(DISTINCT comentarios.id) AS comentarios,
            COUNT(DISTINCT curtidas.idCurtida) AS curtidas

        FROM post

        JOIN usuario
            ON usuario.id = post.fk_usuario

        LEFT JOIN comentarios
            ON comentarios.fk_post = post.id

        LEFT JOIN curtidas
            ON curtidas.fk_post = post.id

        GROUP BY
            post.id,
            post.titulo,
            post.conteudo,
            post.dataPost,
            post.imagem,
            post.fk_usuario,
            usuario.nome

        ORDER BY post.dataPost DESC;
    `;

    return database.executar(instrucaoSql);
}

function cadastrar(titulo, conteudo, imagem, fk_usuario) {

    let instrucaoSql = `
        INSERT INTO post
        (titulo, conteudo, imagem, fk_usuario)
        VALUES
        ('${titulo}', '${conteudo}', '${imagem}', ${fk_usuario});
    `;

    return database.executar(instrucaoSql);
}

function deletar(idPost, idUsuario) {

    let instrucaoSql = `
        DELETE FROM post
        WHERE id = ${idPost}
        AND fk_usuario = ${idUsuario};
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar,
    deletar
};