'use strict';

const PageType = {};

// Dependencies
const Filters = require('./Filters');
const ICCReader = require('./ICCReader');

// Filters
const matchHostname = Filters.matchHostname;
const matchPathname = Filters.matchPathname;
// const endsInNumber = Filters.endsInNumber;
// const matchHostnames = Filters.matchHostnames;
// const and = Filters.and;
// const getNumberAtTheEnd = Filters.getNumberAtTheEnd;

// Brands list
const brands = [
    {
        page: matchHostname('iccasap.com'),
        id: matchPathname('/page-links-'),
        reader: ICCReader,
        type: 'ICC',
    },
];

/**
 * Get the type of the page depending on the brands list
 * It contains information about the page if its the leads page
 * and the reader
 */
PageType.getType = () => {
    const { hostname, pathname } = document.location;

    const result = {
        isValidDomain: false,
        domain: hostname,
        brand: undefined,
    };

    const brand = brands.find((b) => b.page(hostname));

    if (!brand) return null;

    // if the hostname matches with the brands
    // and the brand name continue, if not `return`
    if (brand.page(hostname)) {
        result.brand = brand;
        result.type = brand.type;
    } else {
        return true;
    }
    // check if the pathname is on the leads page
    // and add the page number to the result
    if (brand.id(pathname)) {
        result.isLeadsPage = true;
        result.isValidDomain = true;
    }

    return result;
};

module.exports = PageType;
