'use strict';

const TOKEN = require('../config/token.js');
const ACCESS_TOKEN = TOKEN.ACCESS_TOKEN;

var apiUtils = {
    get: function(request, endpoint) {
        request
            .get(endpoint)
            .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
            .end((err, res) => {
              if (err === 'null') {
                console.log ('Error is get request: ' + err);
              } else {
                console.log(res.body);
              }
        });
    }
}

module.exports = apiUtils;