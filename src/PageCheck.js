'use strict';

export const sendContentMessage = (method, params) => {
    return new Promise((resolve, reject) => {
        // Send the message to the active tab in the current window
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const [tab] = tabs;
            const data = { method, params };

            // Send the message {data} to the page and resolves the result back
            chrome.tabs.sendMessage(tab.id, data, (result) => {
                if (!result) {
                    const lastError = chrome.extension.lastError.message;
                    console.log(lastError);

                    // reject promise with error message
                    if (
                        lastError.indexOf('Could not establish connection') == 0
                    ) {
                        reject(lastError);
                    }
                }
                resolve(result);
            });
        });
    });
};
