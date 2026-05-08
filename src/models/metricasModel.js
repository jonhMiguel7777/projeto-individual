let database = require("../database/config");

function buscarMetricas() {

    let instrucaoSql = `
        SELECT nomeEvento, qtdPessoas
        FROM evento;
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMetricas
}