//Dependencies
var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var server = http.createServer(handleRequest)

// Sets up the express app
var app = express();
// var PORT = 3000;
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//sets up the server port
function handleRequest(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    // response.end('It Works!! Path Hit: ' + request.url)
  }
  
  
//enables functionality to the server



   app.listen(port, function() {
server.listen(PORT, function() {
   console.log('Server listening on: http://localhost:' + PORT)
    })});
    // (using `process.env.PORT`)