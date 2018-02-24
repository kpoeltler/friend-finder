
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
    let compDiff = 0;
    let compFriend;
    let compFriendPhoto;

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
      }
     
      let compatiblity = differenceScore;
      
    // store new data
    likertScores.push(userFriend);
    // send back matchingFriend object in response
    res.json(matchingFriend);
  });
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
 }
 Rectangle.prototype.area = function() {
 return this.width*this.height;
 }
 var r = new Rectangle(26, 14); // {width: 26, height: 14}
 var v = r.area(); // v == 26*14
 Object.keys(r) == [ 'width', 'height' ] // own properties
 // (document).on("click", ".submit", function () { // var name = $('#friend-name').val().trim(); // var photoLink = $('#friend-photo').val().trim();
// var ansLength = $('#q1').val().length + $('#q2').val().length + $('#q3').val().length + $('#q4').val().length + $('#q5').val().length
+ $('#q6').val().length + $('#q7').val().length + $('#q8').val().length + $('#q9').val().length + $('#q10').val().length;
// var name = $("#reserve-name").val(); // var phone = $("#reserve-phone").val(); // var email = $("#reserve-email").val();
// var id = $("#reserve-unique-id").val(); // var newUser = { // name: name, // phone: phone, // email: email, // id: id,
// })