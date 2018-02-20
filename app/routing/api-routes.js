// 4. Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });
  
  app.get("/data", function(req, res) {
    res.json(Matthew-Meyer);
  });
  
//   app.get("/darthmaul", function(req, res) {
//     res.json(darthmaul);
//   });
  
//   app.get("/obiWanKenobi", function(req, res) {
//     res.json(obiWanKenobi);
//   });
  