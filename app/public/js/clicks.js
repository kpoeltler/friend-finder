$("#survey-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newFriend = [];
        
      for (var i =0; i< 10; i++){
    newFriend. push($("#q" + (i + 1)).val())
      }
  
    console.log(newFriend);
    });
    // Send an AJAX POST-request with jQuery
    // $.post("/api/new", newChirp)
      // On success, run t