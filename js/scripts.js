// back-end business
function Place(name, time, description) {
  this.name = name;
  this.time = time;
  this.description = description;
  this.imageUrl = "";
}

Place.prototype.placeAndTime = function(){
  return this.name + " in " + this.time;
};

Place.prototype.addImageLocation = function(url){
  this.imageUrl = url;
};

//front-end foolery
$(document).ready(function() {
  $("#newPlace").submit(function(event){
    event.preventDefault();

    var inputName = $("#placeName").val();
    var inputTime = $("#placeTime").val();
    var inputDescription = $("#placeDescription").val();
    var newPlace = new Place(inputName, inputTime, inputDescription);
    var image = $("#imageUrl").val();
    newPlace.addImageLocation(image);

    $("#place-list").append("<li><span class='place'>" + newPlace.name + "</span></li>");

    $(".place").last().click(function() {
      $("#outputPlace h2").text(newPlace.placeAndTime());
      $("#placeImage").attr('src','http://www.placecage.com/g/200/300')
      $("#outputPlace p.time").text(newPlace.time);
      $("#outputPlace p.description").text(newPlace.description);
    });

    $("#placeName").val("");
    $("#placeTime").val("");
    $("#placeDescription").val("");

  });
});
