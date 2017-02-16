'use strict';

var Filters = {};

/**
 * A higher level function to create a matcher for a domain name
 */
Filters.matchHostname = function matchHostname (hostname) {
    return function (fullHostname) {
        return fullHostname.lastIndexOf(hostname) > -1;
    }
}

/**
 * A higher level function to create matcher for a list of domain names
 */
Filters.matchHostnames = function matchHostnames (hostnames) {
    return function (fullHostname) {
        var match = false;
        hostnames.forEach(function (hostname) {
            if (fullHostname.lastIndexOf(hostname) > -1) {
                match = true;
                return -1;
            }
        })
        return match;
    }
}

/**
 * read a path and returns if it ends in a number
 */
Filters.endsInNumber = function endsInNumber (pathname) {
    var chunks = pathname.split('/')
    if (chunks.length < 1) return false;
    
    var lastChunk = chunks[chunks.length - 1];
    if (!Filters.isNumber(lastChunk)) return false;

    return true;
}

/**
 * get the number at the end of the url
 */
Filters.getNumberAtTheEnd = function getNumberAtTheEnd (pathname) {
    var chunks = pathname.split('/')
    if (chunks.length < 1) return;
    
    var lastChunk = chunks[chunks.length - 1];
    if (!Filters.isNumber(lastChunk)) return;

    return lastChunk;
}

/**
 * check if it's a number (string or int)
 */
Filters.isNumber = function isNumber (x) {
    if (isNaN(x)) return false;

    var parsed = parseInt(x);
    if (isNaN(parsed)) return false;

    return true;
}

/**
 * A higher level function to create a matcher for the path of the url
 */
Filters.matchPathname = function matchPathname (pathname) {
    return function (fullPathname) {
        return fullPathname.lastIndexOf(pathname) > -1;
    }
}

/**
 * Higher level "and" function
 */
Filters.and = function and (a, b) {
    return function (arg) {
        return a(arg) && b(arg);
    }
}


module.exports = Filters;