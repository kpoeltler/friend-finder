


    
      
      var friendsData = require('../data/friends.js');
      var bodyParser = require('body-parser');
      var path = require('path');
      
      
      module.exports = function(app) {
      
          
          app.use(bodyParser.json());
          app.use(bodyParser.urlencoded({ extended: true }));
          app.use(bodyParser.text());
          app.use(bodyParser.json({ type: "application/vnd.api+json" }));
      
          
          app.get("/data/friends", function(req, res) {
              res.json();
          });
      
       
          app.post("/data/friends", function(req, res) {
              
              var userFriend = req.body;
              var totalScore;
              var compDiff = 0;
              var compFriend;
              
              
          
              for (var i = 0; i < friendsData.length; i++) {
                  
                  totalScore = 0;
                  
                  for (var j = 0; j < 10; j++) {
                      var minuend = userFriend[j];
                      var subtrahend = friendsData[i].scores[j];
                      parseInt(minuend);
                      parseInt(subtrahend);
                      
                      var addToScore = Math.abs(minuend - subtrahend);
                     
                      totalScore = totalScore + addToScore;
                  }
                 
                  var newTotalScore = totalScore;
                }   
          });
      };
      