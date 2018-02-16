// . Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 



//dependicies

var bodyParser = require("body-parser");
var path = require("path");
var app = express();

http://localhost:3000/css/style.css
http://localhost:3000/routing/api-routes.js
http://localhost:3000/routing/html-routes.js
http://localhost:3000/home.html
http://localhost:3000/survey.html

app.use('/static', express.static(path.join(__dirname, 'public')))

module.exports = function(app) {

// data parsing

    app.use(bodyParser.json());
    app.use(bodyParser.text());

// routes

    app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "./home.html"));
    });
  
    app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./survey.html"));
    });
  };





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
  