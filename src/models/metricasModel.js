let database = require("../database/config");

function buscarMetricas(idUsuario) {
    let instrucaoSql = `
        SELECT nomeEvento, qtdPessoas, dataEvento
        FROM evento
        WHERE fkUsuario = ${idUsuario}
        ORDER BY dataEvento ASC;
    `;
    return database.executar(instrucaoSql);
}

function cadastrarEvento(nomeEvento, qtdPessoas, dataEvento, fkUsuario) {
    let instrucaoSql = `
        INSERT INTO evento (nomeEvento, qtdPessoas, dataEvento, fkUsuario)
        VALUES ('${nomeEvento}', ${qtdPessoas}, '${dataEvento}', ${fkUsuario});
    `;
    return database.executar(instrucaoSql);
}

module.exports = { buscarMetricas, cadastrarEvento };