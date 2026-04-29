var database = require("../database/config")

function cadastrar(titulo, conteudo, fkUsuario) {
    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", titulo, conteudo, fkUsuario);

    var instrucaoSql = `
        INSERT INTO post (titulo, conteudo, fk_usuario) VALUES ('${titulo}', '${conteudo}', ${fkUsuario})
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

    console.log("ACESSEI O POST MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar():");
    function listar() {

    var instrucaoSql = `
        SELECT 
            usuario.nome AS autor,
            post.titulo,
            post.conteudo,
            post.dataPost,

            MAX(foto_post.caminho) AS caminho,

            COUNT(comentarios.id) AS comentarios

        FROM post

        JOIN usuario
        ON usuario.id = post.fk_usuario

        LEFT JOIN foto_post
        ON post.id = foto_post.fk_post

        LEFT JOIN comentarios
        ON comentarios.fk_post = post.id

        GROUP BY 
            post.id,
            usuario.nome,
            post.titulo,
            post.conteudo,
            post.dataPost

        ORDER BY post.dataPost DESC;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar
};