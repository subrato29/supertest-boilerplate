'use strict';

module.exports = {
    err: function(message) {
        console.error('[ERR] ' + JSON.stringify(message));
    },

    info: function(message) {
        console.info('[INFO] ' + JSON.stringify(message));
    },

    log: function(message) {
        console.log('[LOG] ' + JSON.stringify(message));
    },

    get_array_of_uri: function(array) {
        let array_of_uri = [];
        for (let value of array) {
            array_of_uri.push('spotify:track:' + value);
        }
        return array_of_uri;
    },

    get_array_of_object_uri: function(array) {
        let array_of_object_uri = [];
        for (let value of array) {
            array_of_object_uri.push({
                'uri': 'spotify:track:' + value
            })
        }
        return array_of_object_uri;
    }
};