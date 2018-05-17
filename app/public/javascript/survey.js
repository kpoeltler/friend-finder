$("#submit-btn").on("click", function() {
    event.preventDefault();
    
    let scores = [];
  

    for (let i = 0; i < 10; i++) {
      scores.push($("#question-" + (i+1)).val() * 1);
    }
  

    let getData = {
      scoresFinal: JSON.stringify(scoresFinal)
    };
  

    $.post("/api/friends", getData)
      .then((data) => {
        let link = $("<a>");
        let image = $("<img>");
        link.attr("href", data.link);
        link.attr("target", "_blank");
        link.text("Follow me on Instagram!")
        image.attr("src", data.photo);
        image.attr("alt", "picture of " + data.name);
        image.attr("style", "width: 100%");
  

        $("#result-name").empty();
        $("#result-display").empty();
        $("#result-name").text(data.name);
        $("#result-display").append(link);
        $("#result-display").append(image);
      });
  });
