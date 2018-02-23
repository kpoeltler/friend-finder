var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })



// Dependencies
// =============================================================
// let express = require("express");
// let app = express();
let bodyParser = require("body-parser");
let path = require("path");
// Sets up the Express App
// =============================================================

let PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("app/public"));

// Routes WHY THIS METHOD 
// =============================================================
// app.all('app/routing/api-routes.js', function (req, res, next) {
//   console.log('accessing api-routes')
//   next() // pass control to the next handler
// })
// app.all('app/routing/html-routes.js', function (req, res, next) {
//   console.log('accessing html-routes')
  // next() // pass control to the next handler
// })
require("./app/routing/api-routes.js")(app);

require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




































