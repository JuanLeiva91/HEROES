var express = require ("express");
var router = express.Router();

var heroesController = require("../controller/heroesController.js");

router.get("/", heroesController.main);

router.get("/detalle/:id", heroesController.detalle);

router.get("/bio/:id/:ok", heroesController.resenia);

module.exports = router;