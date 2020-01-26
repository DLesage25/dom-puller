'use strict';

const PageType = {};

// Dependencies
const Filters = require('./Filters');
const ICCReader = require('./ICCReader');

// Filters
const matchHostname = Filters.matchHostname;
const matchPathname = Filters.matchPathname;
const endsInNumber = Filters.endsInNumber;
const matchHostnames = Filters.matchHostnames;
const and = Filters.and;
const getNumberAtTheEnd = Filters.getNumberAtTheEnd;

// Brands list
const brands = {
    iccasap: {
        page: matchHostname('iccasap.com'),
        id: and(matchPathname('/page-links-'), endsInNumber),
        reader: ICCReader
    }
};

/**
 * Get the type of the page depending on the brands list
 * It contains information about the page if its a ticket page,
 * the name of the brand and the ticket id
 */
PageType.getType = () => {
    const { hostname, pathname } = document.location;

    let result = {
        isICC: false,
        isValidDomain: false,
        domain: hostname,
        brand: undefined
    };

    Object.entries(brands).forEach(([brand, rules]) => {
        // if the hostname matches with the brands
        // and the brand name continue, if not `return`
        if (rules.page(hostname)) {
            result.brand = brand;
        } else {
            return true;
        }

        // check if the pathname is a ticket and add the
        // number to the result
        if (rules.id(pathname)) {
            result.id = getNumberAtTheEnd(pathname);
            result.isTicket = true;
            result.isValidDomain = true;

            // return true;
        }

        // If the module has a legacy checker, run it and
        // save the results
        if (rules.reader.legacyCheck) {
            result = rules.reader.legacyCheck(result);
            // return false;
        }
    });

    // Returns the result with the isTicket flag, brand and id
    return result;
};

module.exports = PageType;
