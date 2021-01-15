'use strict';

const commonUtils = require('../lib/commonUtils.js')
const TOKEN = require('../config/token.js');
const ACCESS_TOKEN = TOKEN.ACCESS_TOKEN;

var apiUtils = {
    get: function(request, endpoint) {
      return new Promise((resolve, reject) => {
        request
          .get(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .end((err, res) => {
            if (err === 'null') {
              commonUtils.err('get request: ' + err);
              reject (err);
            } else {
              resolve (res.body);
            }
        });       
      });
    }
}

module.exports = apiUtils;