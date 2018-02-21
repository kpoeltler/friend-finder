$("#survey-submit").on("click", function(event) {
  event.preventDefault();
  var newFriend = [];
  for (var i = 0; i < 10; i++) {
    newFriend.push($("#q " + (i + 1)).val().trim());
  }

  console.log(newFriend);
})

