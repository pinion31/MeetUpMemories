$(document).ready(function(){
  Object.keys(myEvent).map(function(key) {
    $("#events-list").append("<div class='card event-component'>"
      + "<h5>" +myEvent[key].name + "</h5>" +
      "</div>");
  });
});