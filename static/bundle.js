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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

$(document).ready(function(){
  Object.keys(myEvent).map(function(key) {
    $("#events-list").append("<div class='card event-component'>"
      + "<h5>" +myEvent[key].name + "</h5>" +
      "</div>");
  });
});

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);