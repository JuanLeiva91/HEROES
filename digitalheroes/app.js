// Require de Express
const express = require("express");

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json'));

// Ruta Raíz / ➝ Home
app.get('/', (req, res) => {
	res.send('Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.');
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', (req, res) => {
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/detalle/:id', (req, res) => {
	let heroe = heroes.find(function(element){
		return element.id == req.params.id
	})
	
	if(heroe) {
		res.send("Hola, mi nombre es " + heroe.nombre + " y soy " + heroe.profesion);
	} else {
		res.send('No hay heroe con ese id.');
	}
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/bio/:id/:ok?', (req, res) => {
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
});

// Ruta Créditos
app.get('/creditos', (req, res) => {
	res.send('Creditos de las y los developers.');
});

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});