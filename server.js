'use strict';

const express = require('express');
const server = express();
const port = process.env.PORT || 8084;

const routerDefault = require('./router/default');
const routerEdit = require('./router/edit');

server.use(express.static('public'));

server.use('/edit', routerEdit);
server.use('/', routerDefault);


server.listen(port);

console.log('server lisening on Port: ' + port);