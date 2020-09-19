'use strict';

//basic config object
const config = {
    push_url: 'http://requestb.in/17h1nva1',
    params: {},
    target: 'PageType',
};
const { sendContentMessage } = require('./PageCheck.js');

//setup function, gets the user's profile
const run = async () => {
    //email retrieve
    chrome.identity.getProfileUserInfo((object) => {
        console.log(object.email);
    });

    const result = await sendContentMessage(config.target, config.params);
    console.log({ result });
};

chrome.browserAction.onClicked.addListener(run);
