$(document).ready(function () {
$("#add-player").on("click", function(event) {
    event.preventDefault();
    console.log("looking for click");
var addPlayer = $("#player-input").val()
console.log(addPlayer);

$("#buttonDiv").append(`<button class = "newButton" data-player=${addPlayer}>${addPlayer}</button>
`)
})
  $("button").on("click", function() {
    //   Event.preventDefault();
      var player = $(this).attr("data-player");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      encodeURIComponent(player.trim()) + "&api_key=ho2NR3gmJEeQLRwM5NiKqJDqjyUF0Nas&limit=10";
    //   AJAX request with the queryURL
      console.log(queryURL)
      console.log(player);
      $.ajax({
          url: queryURL,
          method: "GET"
      })
.then(function(response) {
    var results = response.data;
console.log(results);
    for (var i = 0; i < results.length; i++ ){
        var playerDiv = $("<div>");
        //making a paragraph tag with the result items
        // var p = $("p").text("Rating: " + results[i].rating); 
        //creating image tag
        var playerImage = $("<img>");
        playerImage.attr("src",results[i].images.fixed_height.url);
        playerDiv.prepend(playerImage);
         
        $("#gifArea").prepend(playerDiv);
        
    }


})
  })
})