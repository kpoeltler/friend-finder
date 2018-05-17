// Dependencies
// =============================================================
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

let app = express();
// Sets up the Express App
// =============================================================

let PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app/public')));

// Routes WHY THIS METHOD
// =============================================================
// app.all('app/routing/api-routes.js', function (req, res, next) {
//   console.log('accessing api-routes')
//   next() // pass control to the next handler
// })
// app.all('app/routing/html-routes.js', function (req, res, next) {
//   console.log('accessing html-routes')
// next() // pass control to the next handler

require("./app/routing/api-routes.js")(app);

require("./app/routing/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
