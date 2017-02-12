'use strict';

function setResult(info) {

    document.getElementById('text').innerHTML = info;

    var request = new XMLHttpRequest(),
        send_url = "http://requestb.in/17h1nva1",
        params = "data=" + info;

    request.open("POST", send_url, true);
    request.send(params);

}

function queryTabs(query) {

    // ...query for the active tab...
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { "message": "clicked_browser_action", "query": query }, setResult);
    });

}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function() {

    document.getElementById('my_form').onsubmit = function() {

        let query = document.getElementById('query').value;

        queryTabs(query);

        return false;
    }

    // var query = $('#my_form input').html();
    // queryTabs(query);

});

function testResults(form) {
    let query = form.query.value;
    queryTabs(query);
}
