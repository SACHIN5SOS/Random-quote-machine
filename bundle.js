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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("  function getQuote()\r\n  {\r\n    //for random color\r\n    var letters = '0123456789ABCDEF';\r\n     var color = '#';\r\n  for (var i = 0; i < 6; i++) {\r\n    color += letters[Math.floor(Math.random() * 16)];\r\n  }\r\n  //json property  colectinting through ajax and json\r\n  var url=\"https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?\"; \r\n  $.getJSON(url,function(data){\r\n    $(\"#quote\").fadeOut(function(){\r\n      $.ajax({\r\n    url: \"https://api.unsplash.com/photos/random?client_id=b3e6bd91754c4a908d00b9eef529b613536ac06204e26ca54c802c5d0d9d2e6b\",\r\n      cache: false,\r\n      success: function(result){\r\n        randomPhoto = result.urls.regular;\r\n          photoName = result.user.name;\r\n  \r\n     $('body').css('background-image', 'url('+randomPhoto+')');  \r\n  $('#photographer').html(photoName);\r\n    \r\n      }\r\n  \r\n                });\r\n      $(this).html('\"'+data.quoteText+'\"').fadeIn();\r\n        \r\n      $(this).css(\"color\",color);\r\n    \r\n  });\r\n     $(\"#authorname\").fadeOut(function(){\r\n    $(this).html('-'+data.quoteAuthor).fadeIn();\r\n    $(this).css(\"color\",color);\r\n     });\r\n    });\r\n  \r\n\r\n  \r\n  };\r\n \r\n\r\n$(\"#newquote\").on(\"click\",function(){\r\n  getQuote(); \r\n \r\n  });\r\n$(\"#tweet\").on(\"click\",function(){\r\n  var randomquote=$(\"#quote\").text();\r\n  window.open(\"https://twitter.com/intent/tweet?text=\"+randomquote);\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });