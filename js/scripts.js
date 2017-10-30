// back-end business
function Place(name) {
  this.name = name;
}



//front-end foolery
$(document).ready(function() {
  $("#newPlace").submit(function(event){
  event.preventDefault();


  var userInput = $("#placeName").val();
  var newPlace = new Place(userInput);

  $("#place-list").append("<li><span class='place'>" + newPlace.name + "</span></li>");
  });
});
