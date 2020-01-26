'use strict';

const Filters = {};

/**
 * A higher level function to create a matcher for a domain name
 */
Filters.matchHostname = hostname => {
    return fullHostname => {
        console.log({ hostname, fullHostname });
        return fullHostname.lastIndexOf(hostname) > -1;
    };
};

/**
 * A higher level function to create matcher for a list of domain names
 */
Filters.matchHostnames = hostnames => {
    return fullHostname => {
        let match = false;
        hostnames.forEach(function(hostname) {
            if (fullHostname.lastIndexOf(hostname) > -1) {
                match = true;
                return -1;
            }
        });
        return match;
    };
};

/**
 * read a path and returns if it ends in a number
 */
Filters.endsInNumber = pathname => {
    let chunks = pathname.split('/');
    if (chunks.length < 1) return false;

    let lastChunk = chunks[chunks.length - 1];
    if (!Filters.isNumber(lastChunk)) return false;

    return true;
};

/**
 * get the number at the end of the url
 */
Filters.getNumberAtTheEnd = pathname => {
    let chunks = pathname.split('/');
    if (chunks.length < 1) return;

    let lastChunk = chunks[chunks.length - 1];
    if (!Filters.isNumber(lastChunk)) return;

    return lastChunk;
};

/**
 * check if it's a number (string or int)
 */
Filters.isNumber = x => {
    if (isNaN(x)) return false;

    let parsed = parseInt(x);
    if (isNaN(parsed)) return false;

    return true;
};

/**
 * A higher level function to create a matcher for the path of the url
 */
Filters.matchPathname = pathname => {
    return fullPathname => {
        return fullPathname.lastIndexOf(pathname) > -1;
    };
};

/**
 * Higher level "and" function
 */
Filters.and = (a, b) => {
    return arg => {
        return a(arg) && b(arg);
    };
};

module.exports = Filters;
