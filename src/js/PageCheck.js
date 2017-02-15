'use strict';

module.exports = function function_name() {

    function get(method, params) {

        return new Promise(function(resolve, reject) {

            // Send the message to the active tab in the current window
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                let tab = tabs[0];
                let data = { method: method };

                // Send the message {data} to the page and resolves the result back
                chrome.tabs.sendMessage(tab.id, data, function(result) {
                    if (!result) {
                        let lastError = chrome.extension.lastError.message;
                        console.log(lastError);

                        // reject promise with error message
                        if (lastError.indexOf('Could not establish connection') == 0) {
                            reject('Could not establish connection')
                        }
                    }
                    resolve(result);
                });
            });
        })
    };

    function getPageType() {
        get('PageType').then(function(pageType) {
            pageType = pageType || {};

            if (pageType.isValidDomain !== true) {
                return;
            }

            // Check if the page is a ticket
            if (pageType.isTicket) {
                return "is ticket";
            } else {
                return "not ticket";
            }
        });
    }

    return {
        getPageType: getPageType,
        get: get
    };

}
