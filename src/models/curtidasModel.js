let database = require("../database/config");

function curtir(fk_usuario, fk_post) {
  let instrucaoSql = `
    insert into curtidas (fk_usuario,fk_post)
    values (${fk_usuario}, ${fk_post})`;

  return database.executar(instrucaoSql);
}

function descurtir(fk_usuario, fk_post) {
  let instrucaoSql = `
    delete from curtidas
    where fk_usuario = ${fk_usuario}
    and fk_post = ${fk_post}`;
  return database.executar(instrucaoSql);
}

function verificarCurtida(fk_usuario, fk_post) {

    let instrucaoSql = `
        select *
        from curtidas
        where fk_usuario = ${fk_usuario}
        and fk_post = ${fk_post};
    `;

    return database.executar(instrucaoSql);
}

function totalCurtidas(fk_post) {
  let instrucaoSql = `
    select count(*) as total
    from curtidas
    where fk_post = ${fk_post};
  `;

  console.log("Executando SQL: \n" + instrucaoSql);

  return database.executar(instrucaoSql);
}

module.exports = {
  curtir,
  descurtir,
  verificarCurtida,
  totalCurtidas,
};
