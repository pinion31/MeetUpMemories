$(document).ready(function(){
  $("#events-list").append(
    "<h1 class='event-list-title'> Past Events </h1>"
  );

  Object.keys(myEvent).map(function(key) {
    $("#events-list").append("<div class='card event-component'" +
      "id='event-"+ key +"'>" +
      + "<h5>" + myEvent[key].name + "</h5>" +
      "</div>");
    console.log(myEvent[key].name);

    $("#event-" + key).on('click', function() {
      window.location.hash = "event/" + myEvent[key].id;
      $(window).trigger('hashchange');
    });
  });
});