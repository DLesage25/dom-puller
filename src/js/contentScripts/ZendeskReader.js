'use strict';
var $ = require('jquery');

// function to constuct the urls using the id
var urls = {
    ticket: (id) => `/api/v2/tickets/${id}.json`,
    user: (id) => `/api/v2/users/${id}.json`
};

var ZD = {};

// deferrers for the ticket and user information
ZD.getTicket = (id) => $.getJSON(urls.ticket(id));
ZD.getUser = (id) => $.getJSON(urls.user(id));

ZD.getInfo = function(ticketId) {
    // This contain the object to be returned
    var info = {
        ticket: {},
        user: {}
    };

    return ZD.getTicket(ticketId)
        // Get the information of the ticket and add it to the {info} object
        .then(function(response) {
            var ticket = response.ticket;

            var userId = ticket.assignee_id;

            info.ticket.id = ticket.id;
            info.ticket.title = ticket.subject;
            info.ticket.type = ticket.type;
            info.ticket.url = location.href;

            if (!userId) throw 'Unassigned ticket';

            return ZD.getUser(userId);
        })
        // Get the information of the user and add it to the {info} object
        .then(function(response) {
            var user = response.user;

            info.user.id = user.id;
            info.user.name = user.name;
            info.user.email = user.email;

            return info;
        });
};

module.exports = ZD;