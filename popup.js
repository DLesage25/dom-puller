'use strict';

//set result in popup 
function setResult(info) {
    document.getElementById('text').innerHTML = info;
}

//send onclick to background
function queryTabs(query) {

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { "message": "clicked_browser_action", "query": query }, setResult);
    });

}

// get query from popup
window.addEventListener('DOMContentLoaded', function() {

    document.getElementById('my_form').onsubmit = function() {

        let query = document.getElementById('query').value;

        queryTabs(query);

        return false;
    }
});

//get tab URL
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  console.log(tabs[0].url);
});
