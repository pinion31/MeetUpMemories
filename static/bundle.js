/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(5);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

$(document).ready(function(){

  var currentHash = "";

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
  ];

  function render(path) {
    routeMap.forEach(function(page) {
      if (page.path === path) {
        $(page.className).removeClass('hidden');
        $(page.className).addClass('visible');
      } else {
          console.log('tester',window.location.hash);
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

/***/ })
/******/ ]);