
// Dependencies
// =============================================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
// Sets up the Express App
// =============================================================

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("app/public"));

// Routes
// =============================================================
// require("./app/routing/api-routes.js")(app);

// require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




































