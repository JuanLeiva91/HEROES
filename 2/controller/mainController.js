
var mainController = {
    main: function (req,res){
        res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
    },
    creditos: function(req, res) {
        res.send('Creditos Maria Clara Riccardini.');
    }
}
module.exports = mainController;