$(document).ready(function(){
    $("#meetup-event").append(
      "<h1 id='event-title'></h1>" +
      "<h3 id='event-venue-name'></h3>" +
      "<p id='event-venue-address'></p>" +
      "<p id='event-venue-city'></p>" +
      "<br>" +
      "<h4 id='event-group-name'></h4> <br>" +
      "<h4 id='event-date'></h4>"
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