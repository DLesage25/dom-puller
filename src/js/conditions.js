'use strict';

var moment = require('moment-timezone');

var conditions = {};

conditions.checkTime = function(payload, params) {

    let startTime = payload.created_at,
        updateTime = payload.updated_at,
        replies = payload.replies,
        threshold = params.threshold.amount,
        thresholdUnit = params.threshold.unit,
        differenceFromStartTime = moment.utc().diff(startTime, thresholdUnit),
        differenceFromUpdateTime = moment.utc().diff(startTime, thresholdUnit);

    params.isValid = false;

    //if time since ticket's creation and 
    if (replies == 0) {

        payload.isValid = true;

    } else if (differenceFromUpdateTime > threshold) {

        payload.isValid = true;

    }

    return payload;
}
