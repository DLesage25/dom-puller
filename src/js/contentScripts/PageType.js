'use strict';

var PageType = {};
var _ = require('lodash');

// Dependencies
var Filters = require('./Filters');
var ZendeskReader = require('./ZendeskReader');

// Filters
var matchHostname = Filters.matchHostname;
var matchPathname = Filters.matchPathname;
var endsInNumber = Filters.endsInNumber;
var matchHostnames = Filters.matchHostnames;
var and = Filters.and;
var getNumberAtTheEnd = Filters.getNumberAtTheEnd;


// Brands list
var brands = {
    zendesk: {
        page: matchHostname('.zendesk.com'),
        id: and(matchPathname('agent/tickets'), endsInNumber),
        reader: ZendeskReader
    }
};


/**
 * Get the type of the page depending on the brands list
 * It contains information about the page if its a ticket page,
 * the name of the brand and the ticket id
 */
PageType.getType = function () {

    var hostname = document.location.host;
    var pathname = document.location.pathname;
    
    var result = {
        isTicket: false,
        isValidDomain: false,
        domain: hostname,
        brand: undefined
    };

    // Loop the object
    _(brands).each(function (rules, brand) {

        // if the hostname matches with the brands
        // and the brand and continue, if not `return`
        // to loop with the next item on the brand list
        if (rules.page(hostname)) {
            result.brand = brand;
        } else {
            return;
        }

        // check if the pathname is a ticket and add the
        // number to the result
        if (rules.id(pathname)) {
            result.id = getNumberAtTheEnd(pathname);
            result.isTicket = true;
            result.isValidDomain = true;

            return false;
        }

        // If the module has a legacy checker, run it and
        // save the results
        if (rules.reader.legacyCheck) {
            result = rules.reader.legacyCheck(result);
            return false;
        }
    });

    // Returns the result with the isTicket flag, brand and id 
    return result;
};

module.exports = PageType;
