var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarMusculo(peito, perna, costas, biceps, triceps, antebraço, fkusuario) {
    var instrucaoSql = `insert into musculo(peito,biceps,triceps,costas,antebraço,perna,fkusuario)
    values (${peito},${biceps},${triceps},${costas},${antebraço},${perna},${fkusuario});
    `; console.log("Executando a intrução Sql:\n" + instrucaoSql)
    return database.executar(instrucaoSql)


}
function AtualizarMusculo(peito, perna, costas, biceps, triceps, antebraço, fkusuario) {
    var instrucaoSql = `UPDATE musculo
    SET peito =  ${peito},
        biceps =  ${biceps},
        triceps = ${triceps},
        costas =  ${costas},
        antebraço =  ${antebraço},
        perna = ${perna}
    WHERE fkusuario =  ${fkusuario};
    `; console.log("Executando a intrução Sql:\n" + instrucaoSql)
    return database.executar(instrucaoSql)

}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrarMusculo,
    AtualizarMusculo
}
