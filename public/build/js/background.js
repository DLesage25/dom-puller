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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function function_name() {
	
	    function get(method, params) {
	
	        return new Promise(function(resolve, reject) {
	
	            // Send the message to the active tab in the current window
	            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
	                let tab = tabs[0];
	                let data = { method: method, params: params };
	
	                // Send the message {data} to the page and resolves the result back
	                chrome.tabs.sendMessage(tab.id, data, function(result) {
	                    if (!result) {
	                        let lastError = chrome.extension.lastError.message;
	                        console.log(lastError);
	
	                        // reject promise with error message
	                        if (lastError.indexOf('Could not establish connection') == 0) {
	                            reject(lastError)
	                        }
	                    }
	                    resolve(result);
	                });
	            });
	        })
	    };
	
	    return {
	        get: get
	    };
	
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//basic config object
	var config = {
	        'push_url': 'http://requestb.in/17h1nva1',
	        'params': {
	            'threshold' : {
	                'amount' : 12,
	                'unit' : 'hours'
	            }
	        },
	        'target': 'Ticket'
	    },
	    PageCheck = __webpack_require__(1);
	
	chrome.browserAction.onClicked.addListener(run);
	
	//setup function, gets the user's profile
	function run() {
	
	    //email retrieve
	    chrome.identity.getProfileUserInfo(function(object) { console.log(object.email); });
	
	    PageCheck().get(config.target, config.params)
	        .then(function(result) {
	            console.log(result);
	        })
	        .catch(function(err) {
	            console.log(err);
	        });
	
	}
	
	function setResult(data) {
	    console.log(data);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTdmMGZiNDM5NmIwODdkOTI3NTA/YjE5MiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvUGFnZUNoZWNrLmpzP2MxMDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQStCLG9DQUFvQztBQUNuRTtBQUNBLDZCQUE0Qjs7QUFFNUIsc0NBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCLGNBQWE7QUFDYixVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBEQUF5RCwyQkFBMkIsRUFBRTs7QUFFdEY7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTdmMGZiNDM5NmIwODdkOTI3NTAiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZnVuY3Rpb25fbmFtZSgpIHtcblxuICAgIGZ1bmN0aW9uIGdldChtZXRob2QsIHBhcmFtcykge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICAgICAgLy8gU2VuZCB0aGUgbWVzc2FnZSB0byB0aGUgYWN0aXZlIHRhYiBpbiB0aGUgY3VycmVudCB3aW5kb3dcbiAgICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uKHRhYnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFiID0gdGFic1swXTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHsgbWV0aG9kOiBtZXRob2QsIHBhcmFtczogcGFyYW1zIH07XG5cbiAgICAgICAgICAgICAgICAvLyBTZW5kIHRoZSBtZXNzYWdlIHtkYXRhfSB0byB0aGUgcGFnZSBhbmQgcmVzb2x2ZXMgdGhlIHJlc3VsdCBiYWNrXG4gICAgICAgICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBkYXRhLCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0RXJyb3IgPSBjaHJvbWUuZXh0ZW5zaW9uLmxhc3RFcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobGFzdEVycm9yKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0IHByb21pc2Ugd2l0aCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFzdEVycm9yLmluZGV4T2YoJ0NvdWxkIG5vdCBlc3RhYmxpc2ggY29ubmVjdGlvbicpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobGFzdEVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGdldFxuICAgIH07XG5cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL1BhZ2VDaGVjay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuLy9iYXNpYyBjb25maWcgb2JqZWN0XG52YXIgY29uZmlnID0ge1xuICAgICAgICAncHVzaF91cmwnOiAnaHR0cDovL3JlcXVlc3RiLmluLzE3aDFudmExJyxcbiAgICAgICAgJ3BhcmFtcyc6IHtcbiAgICAgICAgICAgICd0aHJlc2hvbGQnIDoge1xuICAgICAgICAgICAgICAgICdhbW91bnQnIDogMTIsXG4gICAgICAgICAgICAgICAgJ3VuaXQnIDogJ2hvdXJzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAndGFyZ2V0JzogJ1RpY2tldCdcbiAgICB9LFxuICAgIFBhZ2VDaGVjayA9IHJlcXVpcmUoJy4vUGFnZUNoZWNrLmpzJyk7XG5cbmNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihydW4pO1xuXG4vL3NldHVwIGZ1bmN0aW9uLCBnZXRzIHRoZSB1c2VyJ3MgcHJvZmlsZVxuZnVuY3Rpb24gcnVuKCkge1xuXG4gICAgLy9lbWFpbCByZXRyaWV2ZVxuICAgIGNocm9tZS5pZGVudGl0eS5nZXRQcm9maWxlVXNlckluZm8oZnVuY3Rpb24ob2JqZWN0KSB7IGNvbnNvbGUubG9nKG9iamVjdC5lbWFpbCk7IH0pO1xuXG4gICAgUGFnZUNoZWNrKCkuZ2V0KGNvbmZpZy50YXJnZXQsIGNvbmZpZy5wYXJhbXMpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG5cbn1cblxuZnVuY3Rpb24gc2V0UmVzdWx0KGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2JhY2tncm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==