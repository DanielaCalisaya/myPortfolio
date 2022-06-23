const express = require('express');
const app = express(); 
const path = require('path');
const port = process.env.PORT || 3030;

app.use(express.static('public'));

/* EJS Setea el template engine*/
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//routes
let homePath = require('./routers/home');

//home
app.use('/', homePath);




app.listen(port, () => 
console.log(`Servidor levantado en el puerto ${port}
->  http://localhost:${port}`))