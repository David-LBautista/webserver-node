const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');


const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

//! Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


//? HOME PAGE
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'daVid',
        anio: new Date().getFullYear()
    });
});

//? ABOUT PAGE
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});