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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = () => {
	    const get = (method, params) => {
	        return new Promise((resolve, reject) => {
	            // Send the message to the active tab in the current window
	            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
	                let tab = tabs[0];
	                let data = { method: method, params: params };
	
	                // Send the message {data} to the page and resolves the result back
	                chrome.tabs.sendMessage(tab.id, data, result => {
	                    if (!result) {
	                        let lastError = chrome.extension.lastError.message;
	                        console.log(lastError);
	
	                        // reject promise with error message
	                        if (
	                            lastError.indexOf(
	                                'Could not establish connection'
	                            ) == 0
	                        ) {
	                            reject(lastError);
	                        }
	                    }
	                    resolve(result);
	                });
	            });
	        });
	    };
	
	    return {
	        get: get
	    };
	};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	//basic config object
	var config = {
	        push_url: 'http://requestb.in/17h1nva1',
	        params: {},
	        target: 'PageType'
	    },
	    PageCheck = __webpack_require__(1);
	
	//setup function, gets the user's profile
	const run = () => {
	    //email retrieve
	    chrome.identity.getProfileUserInfo(object => {
	        console.log(object.email);
	    });
	
	    PageCheck()
	        .get(config.target, config.params)
	        .then(result => {
	            console.log({ result });
	        })
	        .catch(err => {
	            console.log(err);
	        });
	};
	
	chrome.browserAction.onClicked.addListener(run);
	
	// const setResult = data => {
	//     console.log(data);
	// };


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzhkZmEzM2NkZDA3MjM3MzM4ODQ/NTcxMSIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZUNoZWNrLmpzPzIzYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLG9DQUFvQztBQUNuRTtBQUNBLDZCQUE0Qjs7QUFFNUIsc0NBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCLFNBQVM7QUFDbEMsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6ImJhY2tncm91bmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzOGRmYTMzY2RkMDcyMzczMzg4NCIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2V0ID0gKG1ldGhvZCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBTZW5kIHRoZSBtZXNzYWdlIHRvIHRoZSBhY3RpdmUgdGFiIGluIHRoZSBjdXJyZW50IHdpbmRvd1xuICAgICAgICAgICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgdGFicyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRhYiA9IHRhYnNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbXM6IHBhcmFtcyB9O1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbWVzc2FnZSB7ZGF0YX0gdG8gdGhlIHBhZ2UgYW5kIHJlc29sdmVzIHRoZSByZXN1bHQgYmFja1xuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgZGF0YSwgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RXJyb3IgPSBjaHJvbWUuZXh0ZW5zaW9uLmxhc3RFcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGFzdEVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0IHByb21pc2Ugd2l0aCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVycm9yLmluZGV4T2YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb3VsZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobGFzdEVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogZ2V0XG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9QYWdlQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8vYmFzaWMgY29uZmlnIG9iamVjdFxudmFyIGNvbmZpZyA9IHtcbiAgICAgICAgcHVzaF91cmw6ICdodHRwOi8vcmVxdWVzdGIuaW4vMTdoMW52YTEnLFxuICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICB0YXJnZXQ6ICdQYWdlVHlwZSdcbiAgICB9LFxuICAgIFBhZ2VDaGVjayA9IHJlcXVpcmUoJy4vUGFnZUNoZWNrLmpzJyk7XG5cbi8vc2V0dXAgZnVuY3Rpb24sIGdldHMgdGhlIHVzZXIncyBwcm9maWxlXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gICAgLy9lbWFpbCByZXRyaWV2ZVxuICAgIGNocm9tZS5pZGVudGl0eS5nZXRQcm9maWxlVXNlckluZm8ob2JqZWN0ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cob2JqZWN0LmVtYWlsKTtcbiAgICB9KTtcblxuICAgIFBhZ2VDaGVjaygpXG4gICAgICAgIC5nZXQoY29uZmlnLnRhcmdldCwgY29uZmlnLnBhcmFtcylcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsgcmVzdWx0IH0pO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xufTtcblxuY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKHJ1bik7XG5cbi8vIGNvbnN0IHNldFJlc3VsdCA9IGRhdGEgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tncm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==