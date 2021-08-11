const express = require('express');
const routes = require('./routes/routes');
const RouteClassification = require('./routes/RouteClassification');
const RouteFichas = require('./routes/RouteFichas');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', routes);
app.use('/clasificacion', RouteClassification);
app.use('/fichas', RouteFichas);

module.exports = app;