const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/quienessomos', (req, res) => res.send('Quienes Somos'));
app.get('/multiplicacion/:x/:y', (req, res) => {
    var x = req.params.x;
    var y = req.params.y;
    res.send(`multiplicacion de ${x} x ${y} = ` + x * y);
});

//ej1////////////////////////////////////
app.get('/ej1/:a', (req, res) => {
var a = req.params.a;

res.send(isNaN(a));
});
//ej2/////////////////////////////////////
app.get('/ej2/:palabra/:palabra2', (req, res)=> {
    var palabra= req.params.palabra;
    var palabra2 = req.params.palabra2;
    res.send(`Junta ${palabra} con ${palabra2}`);
});
//ej3////////////////////////////////////

"use strict";

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World\n');
});

app.use( (req, res, next) => {
  res.status(404);
  res.json({
    "error": "Error. Route not found"
  });
});

  
  module.exports = app;
app.listen(3000, () => console.log('servidor levantado en 3000'));