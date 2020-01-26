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
