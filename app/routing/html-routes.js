

//dependicies

var bodyParser = require("body-parser");
var path = require("path");
var app = express();

// http://localhost:3000/css/style.css
// http://localhost:3000/routing/api-routes.js
// http://localhost:3000/routing/html-routes.js
// http://localhost:3000/home.html
// http://localhost:3000/survey.html



module.exports = function(app) {
    
    app.use('/static', express.static(path.join(__dirname, 'public')))

// data parsing

    app.use(bodyParser.json());
    app.use(bodyParser.text());

  
// A GET Route to `/survey` which should display the survey page.

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "./survey.html"));
    });

// A default, catch-all route that leads to `home.html` which displays the home page. 

    app.get("/all", function(req, res) {
        res.sendFile(path.join(__dirname, "./home.html"));
    });
  };


  function surveyQuery() {

    // Here we get the location of the root page.
    // We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
    var currentURL = window.location.origin;

    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: currentURL + "/api/survey", method: "GET" })
    .then(function(surveyData) {

      // Here we are logging the URL so we have access to it for troubleshooting
      console.log("------------------------------------");
      console.log("URL: " + currentURL + "/api/survey");
      console.log("------------------------------------");

      // Here we then log the surveyData to console, where it will show up as an object.
      console.log(surveyData);
      console.log("------------------------------------");

      // Loop through and display each of the users
      for (var i = 0; i < surveyData.length; i++) {

        // Create a new <section> to post the friends compatibility? 
        var friendMatch = $("<div>");
        friendMatch.addClass("match");
        friendMatch.attr("id", "friendMatch" + i + 1);
        $("#friendMatch").append(friendMatch);

        // var friendNumber = i + 1;


        // Then display the remaining fields in the HTML (Section Name, Date, URL)
        $("#friendMatch" + i + 1).append("<h2><span class='label label-primary'>" + friendMatch + "</span> | " + surveyData[i].userName + "</h2>");
      }
    });
  }

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newUser = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newUser.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcharacter);
  
    characters.push(newcharacter);
  
    res.json(newcharacter);
  });
  



  

//========================================code from the survey form js library======================
// window.survey = new Survey.Model(json)
// survey
//     .onComplete
//     .add(function (result) {
//         document
//             .querySelector('#surveyResult')
//             .innerHTML = "result: " + JSON.stringify(result.data)
//     });

// $("#surveyElement").Survey({model: survey})
// });


//======================================================================================================

    //   $.get("/api/" + searchedCharacter, function(data) {
    //     console.log(data);
    //     if (data) {
    //       $("#stats").show();
    //       $("#name").text(data.name);
    //       $("#role").text(data.role);
    //       $("#age").text(data.age);
    //       $("#force-points").text(data.forcePoints);
    //     }
    //     else {
    //       $("#name").text("The force is not strong with this one. Your character was not found.");
    //       $("#stats").hide();
    //     }
    //   });
    // });
  