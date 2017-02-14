/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	//basic config object
	var config = {
	    'query': '.save',
	    'push_url': 'http://requestb.in/17h1nva1'
	};
	
	// chrome.runtime.sendMessage('extension_id', config, { includeTlsChannelId: false }, function() {
	//     console.log('Application online');
	// })
	
	chrome.browserAction.onClicked.addListener(setup);
	
	//get query and post to requestbin
	chrome.runtime.onMessage.addListener(
	    function(request, sender, sendResponse) {
	        if (request.type === "fetch") {
	            console.log(request);
	        }
	    }
	)
	
	function setIcon() {
	    console.log('ran');
	}
	
	//setup function, gets the user's profile
	function setup() {
	
	    // chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
	    //     console.log('authenticated: ' + token);
	    // });
	
	     chrome.identity.getProfileUserInfo( function(object){ console.log(object.email); } )
	
	};
	
	//callback function, once response with user info is received
	function logIn(resp, xhr) {
	    console.log(resp);
	};
	
	//logs out and clears tokens
	function logout() {
	    setIcon();
	};
	
	//setIcon();


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2UwZDNiNDAyZDBmODllMTgxMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXVELDZCQUE2QjtBQUNwRjtBQUNBLEtBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQ0FBcUMsc0JBQXNCO0FBQzNEO0FBQ0EsU0FBUTs7QUFFUiwyREFBMEQsMkJBQTJCLEVBQUU7O0FBRXZGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZTBkM2I0MDJkMGY4OWUxODEzNiIsIid1c2Ugc3RyaWN0JztcblxuLy9iYXNpYyBjb25maWcgb2JqZWN0XG52YXIgY29uZmlnID0ge1xuICAgICdxdWVyeSc6ICcuc2F2ZScsXG4gICAgJ3B1c2hfdXJsJzogJ2h0dHA6Ly9yZXF1ZXN0Yi5pbi8xN2gxbnZhMSdcbn07XG5cbi8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKCdleHRlbnNpb25faWQnLCBjb25maWcsIHsgaW5jbHVkZVRsc0NoYW5uZWxJZDogZmFsc2UgfSwgZnVuY3Rpb24oKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0FwcGxpY2F0aW9uIG9ubGluZScpO1xuLy8gfSlcblxuY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHNldHVwKTtcblxuLy9nZXQgcXVlcnkgYW5kIHBvc3QgdG8gcmVxdWVzdGJpblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKFxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LnR5cGUgPT09IFwiZmV0Y2hcIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICB9XG4pXG5cbmZ1bmN0aW9uIHNldEljb24oKSB7XG4gICAgY29uc29sZS5sb2coJ3JhbicpO1xufVxuXG4vL3NldHVwIGZ1bmN0aW9uLCBnZXRzIHRoZSB1c2VyJ3MgcHJvZmlsZVxuZnVuY3Rpb24gc2V0dXAoKSB7XG5cbiAgICAvLyBjaHJvbWUuaWRlbnRpdHkuZ2V0QXV0aFRva2VuKHsgJ2ludGVyYWN0aXZlJzogdHJ1ZSB9LCBmdW5jdGlvbih0b2tlbikge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnYXV0aGVudGljYXRlZDogJyArIHRva2VuKTtcbiAgICAvLyB9KTtcblxuICAgICBjaHJvbWUuaWRlbnRpdHkuZ2V0UHJvZmlsZVVzZXJJbmZvKCBmdW5jdGlvbihvYmplY3QpeyBjb25zb2xlLmxvZyhvYmplY3QuZW1haWwpOyB9IClcblxufTtcblxuLy9jYWxsYmFjayBmdW5jdGlvbiwgb25jZSByZXNwb25zZSB3aXRoIHVzZXIgaW5mbyBpcyByZWNlaXZlZFxuZnVuY3Rpb24gbG9nSW4ocmVzcCwgeGhyKSB7XG4gICAgY29uc29sZS5sb2cocmVzcCk7XG59O1xuXG4vL2xvZ3Mgb3V0IGFuZCBjbGVhcnMgdG9rZW5zXG5mdW5jdGlvbiBsb2dvdXQoKSB7XG4gICAgc2V0SWNvbigpO1xufTtcblxuLy9zZXRJY29uKCk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9iYWNrZ3JvdW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=