var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}
function cadastrarMusculo(req, res) {
    var costas = req.body.costasserver
    var biceps = req.body.bicepsserver
    var peito = req.body.peitoserver
    var perna = req.body.pernaserver
    var triceps = req.body.tricepsserver
    var antebraço = req.body.antebraçoserver
    var fkusuario = req.body.idusuarioserver

    if (costas == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (biceps == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (perna == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (peito == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (triceps == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (antebraço == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else if (fkusuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else {
        medidaModel.cadastrarMusculo(peito, perna, costas, biceps, triceps, antebraço,fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro dos musculos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function AtualizarMusculo(req, res) {
    var costas = req.body.costasserver
    var biceps = req.body.bicepsserver
    var peito = req.body.peitoserver
    var perna = req.body.pernaserver
    var triceps = req.body.tricepsserver
    var antebraço = req.body.antebraçoserver
    var fkusuario = req.body.idusuarioserver

    if (costas == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (biceps == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (perna == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (peito == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (triceps == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else if (antebraço == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else if (fkusuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else {
        medidaModel.AtualizarMusculo(peito, perna, costas, biceps, triceps, antebraço,fkusuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar ao atualizar os musculos! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    cadastrarMusculo,
    AtualizarMusculo

}