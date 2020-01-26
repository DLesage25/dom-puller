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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	//basic config object
	var config = {
	        push_url: 'http://requestb.in/17h1nva1',
	        params: {
	            threshold: {
	                amount: 12,
	                unit: 'hours'
	            }
	        },
	        target: 'Ticket'
	    },
	    PageCheck = __webpack_require__(1);
	
	chrome.browserAction.onClicked.addListener(run);
	
	//setup function, gets the user's profile
	const run = () => {
	    //email retrieve
	    chrome.identity.getProfileUserInfo(object => {
	        console.log(object.email);
	    });
	
	    // PageCheck()
	    //     .get(config.target, config.params)
	    //     .then(result => {
	    //         console.log(result);
	    //     })
	    //     .catch(err => {
	    //         console.log(err);
	    //     });
	};
	
	// const setResult = data => {
	//     console.log(data);
	// };


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDEzYmFjN2M2NzgzNjliMjMzZTI/NzM1NCIsIndlYnBhY2s6Ly8vLi9zcmMvUGFnZUNoZWNrLmpzPzIzYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQStCLG9DQUFvQztBQUNuRTtBQUNBLDZCQUE0Qjs7QUFFNUIsc0NBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCLGNBQWE7QUFDYixVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbENBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBLGFBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDAxM2JhYzdjNjc4MzY5YjIzM2UyIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGZ1bmN0aW9uX25hbWUoKSB7XG5cbiAgICBmdW5jdGlvbiBnZXQobWV0aG9kLCBwYXJhbXMpIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cbiAgICAgICAgICAgIC8vIFNlbmQgdGhlIG1lc3NhZ2UgdG8gdGhlIGFjdGl2ZSB0YWIgaW4gdGhlIGN1cnJlbnQgd2luZG93XG4gICAgICAgICAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbih0YWJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhYiA9IHRhYnNbMF07XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7IG1ldGhvZDogbWV0aG9kLCBwYXJhbXM6IHBhcmFtcyB9O1xuXG4gICAgICAgICAgICAgICAgLy8gU2VuZCB0aGUgbWVzc2FnZSB7ZGF0YX0gdG8gdGhlIHBhZ2UgYW5kIHJlc29sdmVzIHRoZSByZXN1bHQgYmFja1xuICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgZGF0YSwgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGFzdEVycm9yID0gY2hyb21lLmV4dGVuc2lvbi5sYXN0RXJyb3IubWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhc3RFcnJvcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlamVjdCBwcm9taXNlIHdpdGggZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RFcnJvci5pbmRleE9mKCdDb3VsZCBub3QgZXN0YWJsaXNoIGNvbm5lY3Rpb24nKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGxhc3RFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBnZXRcbiAgICB9O1xuXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9QYWdlQ2hlY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbi8vYmFzaWMgY29uZmlnIG9iamVjdFxudmFyIGNvbmZpZyA9IHtcbiAgICAgICAgcHVzaF91cmw6ICdodHRwOi8vcmVxdWVzdGIuaW4vMTdoMW52YTEnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHRocmVzaG9sZDoge1xuICAgICAgICAgICAgICAgIGFtb3VudDogMTIsXG4gICAgICAgICAgICAgICAgdW5pdDogJ2hvdXJzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0YXJnZXQ6ICdUaWNrZXQnXG4gICAgfSxcbiAgICBQYWdlQ2hlY2sgPSByZXF1aXJlKCcuL1BhZ2VDaGVjay5qcycpO1xuXG5jaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIocnVuKTtcblxuLy9zZXR1cCBmdW5jdGlvbiwgZ2V0cyB0aGUgdXNlcidzIHByb2ZpbGVcbmNvbnN0IHJ1biA9ICgpID0+IHtcbiAgICAvL2VtYWlsIHJldHJpZXZlXG4gICAgY2hyb21lLmlkZW50aXR5LmdldFByb2ZpbGVVc2VySW5mbyhvYmplY3QgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhvYmplY3QuZW1haWwpO1xuICAgIH0pO1xuXG4gICAgLy8gUGFnZUNoZWNrKClcbiAgICAvLyAgICAgLmdldChjb25maWcudGFyZ2V0LCBjb25maWcucGFyYW1zKVxuICAgIC8vICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIC8vICAgICB9KTtcbn07XG5cbi8vIGNvbnN0IHNldFJlc3VsdCA9IGRhdGEgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JhY2tncm91bmQuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==