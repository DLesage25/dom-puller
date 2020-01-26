'use strict';

//basic config object
var config = {
        push_url: 'http://requestb.in/17h1nva1',
        params: {},
        target: 'PageType'
    },
    PageCheck = require('./PageCheck.js');

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
