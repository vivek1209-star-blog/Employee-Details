var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyparser= require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/meanDb',{  useNewUrlParser:true, useUnifiedTopology:true } );

app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use('/', appRoutes);
http.createServer(app).listen(port);

console.log("backend running on port:", port);
