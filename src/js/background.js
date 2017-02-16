'use strict';

//basic config object
var config = {
        'query': '.save',
        'push_url': 'http://requestb.in/17h1nva1'
    },
    PageCheck = require('./PageCheck.js');

chrome.browserAction.onClicked.addListener(run);

//setup function, gets the user's profile
function run() {

    //email retrieve
    chrome.identity.getProfileUserInfo(function(object) { console.log(object.email); });

    PageCheck().get('Ticket')
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
