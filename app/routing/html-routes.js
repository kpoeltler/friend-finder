
module.exports = function(app) {
  app.get("/", function (req, res) {
    res.sendFile("home.html", {root: "./app/public"});
  });

  app.get("/survey", function (req, res) {
    res.sendFile("survey.html", {root: "./app/public"});
  });
}

// =================================
// var path = require("path");

// var results = require("../data/friends.js");


// module.exports = function(app) {

//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"));
//   });
// };