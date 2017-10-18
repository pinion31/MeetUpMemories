$(document).ready(function(){

  var currentHash = "";

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