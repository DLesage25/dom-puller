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
    PageCheck = require('./PageCheck.js');

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
