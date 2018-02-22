
// Dependencies
var friendsData = require("../data/friends.js");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
  // Set up express for data parsing
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  // Request data from server
  app.get("/api/friends", function(req, res) {
    res.json();
  });

  // Send data to server
  app.post("/api/friends", function(req, res) {
    var userFriend = req.body;
    var totalScore;
    var compDiff = 40;
    var compFriend;
    var compFriendPhoto;

    // iterates thru the friends data
    for (var i = 0; i < friendsData.length; i++) {
      // set total score to 0
      totalScore = 0;
      // takes the userFriends data and compares it to the scores for Qs 1-10
      for (var j = 0; j < 10; j++) {
        var score1 = userFriend[j];
        var score2 = friendsData[i].scores[j];
        parseInt(score1);
        parseInt(score2);
        // take absolute value of score difference
        var addToScore = Math.abs(score1 - score2);
        // add all scores to get final total difference score
        totalScore = totalScore + addToScore;
      }
      // set variable to compare to current compatiblity difference
      var newTotalScore = totalScore;
      // if newTotalScore is less than the current compatibility difference,
      // then change compatibility data
      if (newTotalScore < compDiff) {
        compDiff = newTotalScore;
        compFriend = friendsData[i].name;
        compFriendPhoto = friendsData[i].photo;
      }
    }
    // new object with most compatible friend data
    var matchingFriend = {
      name: compFriend,
      photo: compFriendPhoto
    };
    // store new data
    friendsData.push(userFriend);
    // send back matchingFriend object in response
    res.json(matchingFriend);
  });
};
