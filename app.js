const express = require('express'); // express que un framework para nodejs que sirve para realizar aplicaciones rest api o monoliticas
const routes = require('./routes');
const {error404Handler,errorHandler} = require('./middleware');
require('dotenv').config(); // esta libreria dotenv trae las variables de entorno
require('./services/mongoDB/config').dbConnection(); //TODO cadena de conexion a la base datos
const app = express(); // vas a usar express
app.use(express.json()); // express usa un formato json
app.use(express.urlencoded({extended:false})); // express usa un formato de formulario
app.use('/api',routes); //TODO traeme las rutas de la carpeta routes ()
app.use(error404Handler);// tareme los middleware -> cuando la pagina no exite
app.use(errorHandler);// tareme los middleware -> cuando la pagina esta con problemas caidas , fallo en el servidor
module.exports = app;