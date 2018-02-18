
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
                    text: "Most Saturdays, I fell like a weekend warrior. I want a friend who's ready for an outdoor adventure is important to you."
                }, {
                    value: "q3",
                    text: "Perhaps, most weekends you prefer having a few buddies over, to lounge in front of a big flat screen and get stuffed on unhealthy/healthy snacks and liquids."
                }, {
                    value: "q4",
                    text: "On average your weekend plans mostly include, collaborating on a potential multi-million dollar ideas/business, plan/hobbie. Having an ambitious, focused friend may provide the companionship that helps take you straight to the top of life's pyramid."
                },
            {
                    value: "q5",
                    text: "Your wardrobe screams to the rest of the world 'Yeah! I treat myself!' Perhaps, what will make you smile is having a friend who admires and has the funds to splurge on the finer things in life."
                },
                {
                    value: "q6",
                    text: "On average your weekend plans mostly include, collaborating on a potential multi-million dollar ideas/business, plan/hobbie. Having an ambitious, focused friend may provide the companionship that helps take you straight to the top of life's pyramid."
                },
                {
                    value: "q7",
                    text: "My family and work don't leave a lot of free time. That being said, I'm looking for a friend who wants to meet up once a month."
                },
                {
                    value: "q8",
                    text: "I can't wait to spend quality time building a long lasting friendship."
                },
                {
                    value: "q9",
                    text: "I prefer a friend of the opposite sex. You never know where it will lead...perhaps, a new romance."
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


// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, ".html"));
//   });
  
//   app.get("/add", function(req, res) {
//     res.sendFile(path.join(__dirname, "add.html"));
//   });
  
  
//   app.get("/all", function(req, res) {
//     res.json(characters);
//   });
  
//   let newUser = {
//     scores: []
// };


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

        



  
  
  





















