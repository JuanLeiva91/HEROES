var express = require ("express");
var router = express.Router();
var mainController = require("../controller/mainController.js");


router.get("/", mainController.main);
router.get("/creditos", mainController.creditos);


module.exports = router;