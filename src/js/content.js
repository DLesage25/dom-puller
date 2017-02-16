'use strict';

var $ = require('jquery');

const Zendesk = require('./contentScripts/ZendeskReader.js');
const PageType = require('./contentScripts/PageType.js');
const APIs = {
    'zendesk': Zendesk
};



// // Listen for messages and send the information back
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

//     // This returns the type of the page
//     if (msg.method === 'PageType') {
//         let type = PageType.getType();
//         type.method = 'PageType';
//         sendResponse(type);
//         return true;
//     }

//     // Returns the ticket info, this message will only be recieved when
//     // the user is in a ticket page, so there's no need to validate it
//     if (msg.method === 'Ticket') {
//         let type = PageType.getType();
//         let id = type.id;

//         let brand = type.brand;
//         let api = APIs[brand];

//         if (api && type.isTicket) {
//             api.getInfo(id)
//                 .then(function(data) {
//                     data.method = 'Ticket';
//                     sendResponse(data);
//                 })
//                 .catch(function(error) {
//                     console.log(error);
//                     sendResponse({
//                         error: error,
//                         method: 'Ticket'
//                     });
//                 });
//         }

//         return true;
//     }

//     if (msg.method === 'GoTo') {
//         let url = msg.params.url;

//         if (msg.params.newtab) {
//             let win = window.open(url, '_blank');
//             win.focus();
//         } else {
//             location.href = url;
//         }

//         return true;
//     }

//     return true;

// });


chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {

    Zendesk.getInfo('155').then(function(result){
        sendResponse(result);
    })

    return true;

})
