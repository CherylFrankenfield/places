// back-end business
function Place(name) {
  this.name = name;
}



//front-end foolery
$(document).ready(function() {
  $("#newPlace").submit(function(event){
  event.preventDefault;

  var userInput = $("#placeName").val();
  var place = new Place(userInput);
  debugger;
  alert(place.name);
  });
});
