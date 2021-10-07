'use strict';

const express = require('express');
const server = express();
const port = process.env.PORT || 8084;

server.use(express.static('public'));


const routerDefault = require('./router/default');
server.use('/', routerDefault);


server.listen(port);

console.log('server lisening on Port: ' + port);