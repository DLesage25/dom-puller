'use strict';

var rest = require('restler');

var config = {
    'query':'.save',
    'push_url':'',
    '':''
};

//get query and post to requestbin
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type === "fetch") {
            rest.post('http://requestb.in/17h1nva1').on('success', function(result) {
                console.log(result);
            });
        }
    }
)

