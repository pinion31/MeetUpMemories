$(document).ready(function(){
  $("#events-list").append(
    "<h1 class='event-list-title'> Past Events </h1>"
  );

  Object.keys(myEvent).map(function(key) {

    // creates card list of meetup events
    $("#events-list").append("<div class='card event-component'" +
      "id='event-"+ key +"'>" +
      "<h5>" + myEvent[key].name + "</h5>" +
      "<p class='date-card-text'>" + new Date(myEvent[key].time).toDateString() + "</p>" +
      "<p class='group-card-text'>" + myEvent[key].group.name + "</p>" +
      "</div>");

    // sets listener for each event card
    $("#event-" + key).on('click', function() {
      window.location.hash = "event/" + key;
      buildMeetupEvent(key);
      $(window).trigger('hashchange');
    });
  });

  function buildMeetupEvent(key) {
    $("#event-title").replaceWith("<h1 id='event-title'>" + myEvent[key].name + "</h1>");
    $("#event-venue-name").replaceWith("<h3 id='event-venue-name'>" + myEvent[key].venue.name + "</h3>");
    $("#event-venue-address").replaceWith("<p id='event-venue-address'>" + myEvent[key].venue.address_1 + "</p>");
    $("#event-venue-city").replaceWith( "<p id='event-venue-city'>" + myEvent[key].venue.city + ", " + myEvent[0].venue.state + "</p>");
    $("#event-group-name").replaceWith("<h4 id='event-group-name'> By " + myEvent[key].group.name + "</h4> <br>");
    $("#event-date").replaceWith("<h4 id='event-date'>" + new Date(myEvent[key].time).toDateString() + "</h4>");
  }
});