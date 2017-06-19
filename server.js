var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var HtmlRoutes = require('./app/htmlRoutes.js');
var ApiRoutes = require('./app/apiRoutes.js');

var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Initiates htmlRoutes.js routes
var htmlRoutes = require('./app/htmlRoutes.js')(app,path);
//Initiates apiRoutes.js routes
var apiRoutes = require('./app/apiRoutes.js')(app,path);



//Listening to the server port
app.listen(PORT,()=>{
    console.log('Server listening on PORT ' + PORT);
});