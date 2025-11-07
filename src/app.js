const express = require('express');
const routes = require('./routes');

const app = express();

routes(app); // chama as rotas

module.exports = app;
