/**
 * Per chiamare il framework EXPRESS
 */
const express = require('express');
const app = express();

// file in cui sono scritte le api
const calc = require ('./calculator.js');

// Per poter leggere il body delle response
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Carica il frontend dalla cartella static
app.use('/', express.static('static'));


app.use((req,res,next) => {
    console.log(req.method + ' ' + req.url);
    next();
})

// definisco l'endpoint
app.use('/calculate', calc);

// Gestione errori
app.use((req, res) => {
    res.status(404);
    res.json({ error: 'Not found' });
    console.log('404 not found');
});



module.exports = app;