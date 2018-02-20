
// 
// $(document).ready(function () {

    

    // function n() {
    //     var myObject = {
    //        objProperty: "some text",
    //        objMethod: function() {
    //           alert(objProperty);
    //           }
    //        };
    //     myObject.objMethod();
    //   } 
      
    //   function myFunction() {
    //     var myObject = {
    //        objProperty: "some text",
    //        objMethod: function() {
    //           alert(this.objProperty);
    //           }
    //        };
    //     myObject.objMethod();
    //   }

      

    
Survey
    .StylesManager
    .applyTheme("default");

    
var json = {
    questions: [
        {
            type: "matrix",
            name: "data",
            title: "Friend Finder Survey",
            columns: [
                {
                    value: 1,
                    text: "Strongly Disagree"
                }, {
                    value: 2,
                    text: "Disagree"
                }, {
                    value: 3,
                    text: "Neutral"
                }, {
                    value: 4,
                    text: "Agree"
                }, {
                    value: 5,
                    text: "Strongly Agree"
                }
            ],

            rows: [
                {
                    value: "q1",
                    text: "I would agree that a graceful way of concluding a friendly dinner, is to split the bill 50/50."
                }, {
                    value: "q2",
                    text: "Most Saturdays, I feel like a weekend warrior. I want a friend who's looking to have fun doing any outdoor activity."
                }, {
                    value: "q3",
                    text: "Most of my weekends I prefer lounging in front of a big flat screen tv and getting stuffed on unhealthy or healthy snacks and liquids."
                }, {
                    value: "q4",
                    text: "Most of my weekends are spent collaborating on potential multi-million dollar ideas/business plans.  I want an ambitious business partner."
                },
            {
                    value: "q5",
                    text: "My wardrobe screams to the rest of the world 'Yeah! I treat myself!' I what a friend who has the funds to splurge on the finer things in life."
                },
                {
                    value: "q6",
                    text: "I'm looking for a friend who wants to travel the globe."
                },
                {
                    value: "q7",
                    text: "My family and work don't leave a lot of free time. That being said, I'm looking for a friend who wants to meet up once a month."
                },
                {
                    value: "q8",
                    text: "I want a same sex friend who could end up being my soul-mate."
                },
                {
                    value: "q9",
                    text: "I prefer a friend of the opposite sex. You never know where it will lead, perhaps a new romance."
                },
                
                {
                  
                    value: "q10",
                    text: "I'm not looking for love, I just want to meet a cool democrat."
                
                },
              
                ]
        } 
    ]
}


window.survey = new Survey.Model(json)
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data)
    });

$("#surveyElement").Survey({model: survey});

//====================================How to get usersName and userPic and userSurvey to post in friends.js file============
// Routes
// =============================================================

//do I need to have this generic app.get?
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, ".html"));
  });
  
  app.get("/data", function(req, res) {
    res.sendFile(path.join(__dirname, "survery.js."));
//   });
  
  
//   app.get("/all", function(req, res) {
//     res.json(characters);
//   });
  
  let newUser = {
    results: []
};


// $("#survey").on("click", function () {
//     let name = $("#name").val();
//     let photo = $("#photo").val()
//     if (name && photo) {
//         newUser.name = name;
//         newUser.photo = photo;
//         $(".question").html(questions[0]);
//         $("#myModal").modal();
//         count = 1;
//     } else {
//         alert('We need to know your name and see your picture URL')
//     }
// })
//         app.post("/api/home", function(req, res) {
//             // req.body hosts is equal to the JSON post sent from the user
//             // This works because of our body-parser middleware
//             var userID = req.body;
//             // Using a RegEx Pattern to remove spaces from newCharacter
//             // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//             userID.routeName = userID.name.replace(/\s+/g, "").toLowerCase();
          
//             console.log(userID);
          
//         newUser.push(userID);
          
//             res.json(userID);
//           });

        



  
  
  





















