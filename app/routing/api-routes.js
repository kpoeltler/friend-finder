
      getDiff=(array1, array2) =>{
          let totalDifference = 0;
          for (let j =0; j< array1.length; j++){
              totalDifference += Math.abs(array1[j] - array2[j]);
          }
          return totalDifference;
      }
      
      module.exports = function(app) {
      let data = require("../data/friends.js");
      
      app.get("/api/friends", function (req, res) {
              res.json(data);
          });

      app.post("/api/friends", function (req, res) {
              
              let userFriend = JSON.parse(req.body.scores);
              let userMatch = 0; 
              let userLowest = 20; 
              
              
              for (var i = 0; i < data.length; i++) {
                      let minuend = getDiff(data[i].scores, userFriend);
                      if (minuend < userLowest) {
                          userLowest = minuend;
                          userMatch = i;
                      }
                      }
                      
                      res.json(data[userMatch]);
                    });
                }


    //                   var subtrahend = friendsData[i].scores[j];
    //                   parseInt(minuend);
    //                   parseInt(subtrahend);
                      
    //                   var addToScore = Math.abs(minuend - subtrahend);
                     
    //                   totalScore = totalScore + addToScore;
    //               }
                 
    //               var newTotalScore = totalScore;
    //             }   
    //       });
    //   };
      