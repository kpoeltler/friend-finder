// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on friends.js.
// ===============================================================================
var path = require("path");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) { 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./home.html"));
    });
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./survey.html"));
    });
    //empty / tells server to go to this html page
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

//   app.get("/api/survey", function(req, res) {
//     res.json(survey);
  };

  