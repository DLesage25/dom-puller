// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {

            var firstHref = $(".menu-item a").html();

            // console.log(firstHref);

            var payload = { "message": firstHref, "type": "fetch" };

            sendResponse(firstHref);

        }
    }
);


