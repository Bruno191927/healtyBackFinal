#!/usr/bin/env node
const debug = require('debug')('webapp:server');
const http = require('http'); //usamos una libreria para usar http
const app = require('../app'); // traemos la configracion de la app
const port = normalizePort(process.env.PORT || '3000'); // trame el puerto q esta en la variable de entorno
app.set('port', port); // vas a usar el puerto q esta asignado arriba, por defecto el 3000
const server = http.createServer(app); // TODO creame el servidor

// ver si el puerto es un valor valido 
function normalizePort(val) {
  const port = parseInt(val, 10); // para ver si es un numero

  // eslint-disable-next-line
  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// TODO si hubierse algun error se llamara 1
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

//TODO sirve para estar escuhando 2
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}`: `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}

server.listen(port); // TODO esta hace q el servidor este escuchando siempre
server.on('error', onError); //TODO 1
server.on('listening', onListening); //TODO 2