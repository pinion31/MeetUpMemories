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

    $(".add-contact").click(function(event) {
      event.preventDefault();
      $(".contact-container").append(
        "<div class='card contact-component' data-toggle='modal' data-target='#exampleModal'>" +
        "<h5>" +  $("#contactName").val() + " - " + $("#contactTitle").val() + "</h5>" +
        "</div>"
      );

      $(".modal-title").text($("#contactName").val());
      $(".modal-body").html(
        "<h3> Job Title: " + $("#contactTitle").val() + "</h3>" +
        "<h5> Phone Number: " + $("#contactPhNumber").val() + "</h3>" +
        "<h5> Email: " + $("#contactEmail").val() + "</h3>" +
        "<p> Notes: " + $("#contactNotes").val() + "</p>"
      );

      $("#contactName").val("");
      $("#contactTitle").val("");
      $("#contactEmail").val("");
      $("#contactPhNumber").val("");
      $("#contactNotes").val("");
    });
 });