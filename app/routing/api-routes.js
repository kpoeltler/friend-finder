
// Dependencies
let likertScores = require("../data/friends.js");
let bodyParser = require("body-parser");
let path = require("path");

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
    let userFriend = req.body;
    let differenceScore;
    let compatibility = 0;
    
    
    // iterates thru the friends data
    for (let i = 0; i < likertScores.length; i++) {
      // set total score to 0
      differenceScore = 0;
      // takes the userFriends data and compares it to the scores for each user in the friends array
      for (let k = 0; k < 10; k++) {
        let minuend = userFriend[k];
        let subtrahend = likertScores[i].scores[k];
        parseInt(minuend);
        parseInt(subtrahend);
        
        let difference = Math.abs(minuend - subtrahend);
        // add all scores to get final total difference score
        differenceScore = differenceScore + addToScore;
      
    
      let compatibility = differenceScore;
      
    // store new data
    likertScores.push(userFriend);
    // send back matchingFriend object in response
    res.json(matchingFriend);
    }
  }
})
}
