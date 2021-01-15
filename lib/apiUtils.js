'use strict';

const commonUtils = require('../lib/commonUtils.js')
const TOKEN = require('../config/token.js');
const ACCESS_TOKEN = TOKEN.ACCESS_TOKEN;

var apiUtils = {
    get: function(request, endpoint) {
        request
            .get(endpoint)
            .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
            .end((err, res) => {
              if (err === 'null') {
                commonUtils.err ('Error of get request: ' + err);
              } else {
                console.log (res.body);
              }
        });
    }
}

module.exports = apiUtils;