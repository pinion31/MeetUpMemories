$(document).ready(function(){
    $("#meetup-event").append(
      "<h1>" + myEvent[0].name + "</h1>" +
      "<h3>" + myEvent[0].venue.name + "</h3>" +
      "<p>" + myEvent[0].venue.address_1 + "</p>" +
      "<p>" + myEvent[0].venue.city + ", " + myEvent[0].venue.state + "</p>" +
      "<br>" +
      "<h4> By " + myEvent[0].group.name + "</h4> <br>" +
      "<h4>" + new Date(myEvent[0].time).toDateString() + "</h4>"
    );

    $(".add-contact").on('click', function() {
      $(".contact-container").append(
        "<div class='card contact-component'>" +
        "<h5> Chris Cantu - Web Developer </h5>" +
        "</div>"
      );
    });


 });