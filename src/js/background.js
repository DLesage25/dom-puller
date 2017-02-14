'use strict';

//basic config object
var config = {
    'query': '.save',
    'push_url': 'http://requestb.in/17h1nva1'
};

// chrome.runtime.sendMessage('extension_id', config, { includeTlsChannelId: false }, function() {
//     console.log('Application online');
// })

chrome.browserAction.onClicked.addListener(setup);

//get query and post to requestbin
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type === "fetch") {
            console.log(request);
        }
    }
)

function setIcon() {
    console.log('ran');
}

//setup function, gets the user's profile
function setup() {

    // chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    //     console.log('authenticated: ' + token);
    // });

     chrome.identity.getProfileUserInfo( function(object){ console.log(object.email); } )

};

//callback function, once response with user info is received
function logIn(resp, xhr) {
    console.log(resp);
};

//logs out and clears tokens
function logout() {
    setIcon();
};

//setIcon();
