'use strict';

//get query from popup.js and fetch object's innerHTML
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {

            var firstHref = $(request.query).html();

            var payload = { "message": firstHref, "type": "fetch" };

            sendResponse(firstHref);

        }
    }
);

//todo: get zendesk paths

//get button object and set onclick
//currently not working
// $(function() {
//     $('.save').click(function() {
//         console.log('ticket_submit_buttons');
//     })
// });

$(function() {
$( ".save" ).prepend( "<div id=\"allocator_target\"></div>" );
});