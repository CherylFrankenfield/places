// back-end business
function Place(name, time, description) {
  this.name = name;
  this.time = time;
  this.description = description;
}



//front-end foolery
$(document).ready(function() {
  $("#newPlace").submit(function(event){
    event.preventDefault();

    var userInput = $("#placeName").val();
    var newPlace = new Place(userInput);

    $("#place-list").append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function() {
      $("#outputPlace h2").text(newPlace.name);
      // $("#placeImage").attr('src','http://www.placecage.com/g/200/300')
      $("#outputPlace p.time").text("it was summer");
      $("#outputPlace p.description").text("Oh my gosh. You'll never believe it. It was so great and you'll never experience it for yourself, because it's gone now. I was the last one to go there.")
    });

    $("#placeName").val("");

  });
});
