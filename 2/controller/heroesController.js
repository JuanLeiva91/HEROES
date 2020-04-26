const fs = require ("fs");
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json'));

var heroesController = {
    main: function(req,res){
        res.send(heroes)
    },
    detalle: function(req,res){
        let heroe = heroes.find(function(element){
            return element.id == req.params.id
        })
        
        if(heroe) {
            res.send("Hola, mi nombre es " + heroe.nombre + " y soy " + heroe.profesion);
        } else {
            res.send('No hay heroe con ese id.');
        }

    },
    resenia: function(req,res){
        let heroe = heroes.find(function(element){
            return element.id == req.params.id
        })
        if (heroe) {
            res.send('No encontramos un héroe para mostrarte su biografía');
        } else {
            if (req.params.ok != undefined && req.params.ok == 'ok') {
                res.send("Hola, mi nombre es " + heroe.nombre + " y esto es un poco acerca de mi " + heroe.resenia);
            } else {
                res.send("Hola, mi nombre es " + heroe.nombre + " Lamento que no desees saber más de mi :(");
            }
        }
    },
}
module.exports = heroesController;