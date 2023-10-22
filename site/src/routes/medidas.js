var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/cadastrarMusculo", function (req, res) {
    medidaController.cadastrarMusculo(req, res);
})

router.post("/AtualizarMusculo", function (req, res) {
    medidaController.AtualizarMusculo(req, res);
})

module.exports = router;
