const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030;

app.use(express.static('public'));

app.use("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

//routes
let homePath = require('./routers/home');

//home
app.use('/', homePath);




app.listen(PORT, () => 
console.log(`Servidor levantado en el puerto ${PORT}
->  http://localhost:${PORT}`))