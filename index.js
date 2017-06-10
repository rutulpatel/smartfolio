// Main index.js file
var PORT = process.env.PORT || 3000;

// Dependencies
var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

mongoose.Promise = Promise;

// initialize express app instance
var app = express();
app.server = http.createServer(app);

app.use(express.static(path.join(__dirname, "/public")));
app.set("views", path.join(__dirname, "/views"));

var hbs = exphbs.create({
    layoutsDir: "views/layouts",
    defaultLayout: "main"
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.server.listen(PORT, function() {
    console.log("App started on port " + PORT);
});

module.exports.app;