// content.js
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
