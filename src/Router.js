import {buildMeetupList} from './EventList';

$(document).ready(function(){
  var currentHash = "";

  (function() {
    const hash = window.location.hash.split("=");

    if (hash[0] === '#access') {
      $.getJSON('/getUserEvents', {
        data:hash[1]
      }, function(data) {
        const returnData = JSON.parse(data);
        myEvent = returnData;
        buildMeetupList();
        window.location.hash = "eventList";
        $(window).trigger('hashchange');
      });
    }
  })();

  // route to past events page;
  $("#past-events").on("click", function() {
      window.location.hash = "eventList";
      $(window).trigger('hashchange');
  });

  var routeMap = [
    {
      className: ".contact-add-page",
      path: "event"
    },
    {
      className: ".events-page",
      path: "eventList"
    },
    {
      className: ".login-page",
      path:"login"
    }
  ];

  function render(path) {
    routeMap.forEach(function(page) {
      if (page.path === path) {
        $(page.className).removeClass('hidden');
        $(page.className).addClass('visible');
      } else {
        $(page.className).addClass('hidden');
        $(page.className).removeClass('visible');
      }
    });
  }

  //page routing processed here
  $(window).on('hashchange', function() {
    var url = decodeURI(window.location.hash);
    var hashPath = url.split('/')[0].split("#")[1];

    if (hashPath) {
      if (currentHash !== hashPath) {
        render(hashPath);
        currentHash = window.location.hash;
      }
    }
  });

});