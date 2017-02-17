'use strict';
var $ = require('jquery');

// function to constuct the urls using the id
var urls = {
    ticket: (id) => `/api/v2/tickets/${id}.json`,
    ticketMetrics: (id) => `/api/v2/tickets/${id}/metrics.json`,
    user: (id) => `/api/v2/users/${id}.json`
};

var ZD = {};

// deferrers for the ticket and user information
ZD.getTicket = (id) => $.getJSON(urls.ticket(id));
ZD.getTicketMetrics = (id) => $.getJSON(urls.ticketMetrics(id));
ZD.getUser = (id) => $.getJSON(urls.user(id));

ZD.getInfo = function(ticketId) {
    // This contain the object to be returned
    var info = {
        ticket: {},
        user: {}
    };

    // Higher level variable to check if the user ID exists 
    var userId = '';

    return ZD.getTicket(ticketId)
        // Get the information of the ticket and add it to the {info} object
        .then(function(response) {

            var ticket = response.ticket;
            var userId = ticket.assignee_id;

            info.ticket.id = ticket.id;
            info.ticket.title = ticket.subject;
            info.ticket.type = ticket.type;
            info.ticket.url = location.href;
            info.ticket.status = ticket.status;
            info.ticket.updated_at = ticket.updated_at;
            info.ticket.created_at = ticket.created_at;

            return ZD.getTicketMetrics(ticketId);
        })
        // Get the ticket's responses and reply time and add it to the {info} object
        .then(function(response) {

            info.ticket.replies = response.ticket_metric.replies;
            info.ticket.reply_time_in_minutes = response.ticket_metric.reply_time_in_minutes.business;

            //if the user ID exists, get the user info. If not, return the {info} object
            if (userId) {
                return ZD.getUser(userId)
            } else {
                return info;
            }

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
