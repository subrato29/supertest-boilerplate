'use strict';

const commonUtils = require('../lib/commonUtils.js')
const ACCESS_TOKEN = require('../config/token.js').ACCESS_TOKEN;
const { expect } = require('chai');

var apiUtils = {
    get: function(request, endpoint) {
      return new Promise((resolve, reject) => {
        request
          .get(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('get request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
        });       
      });
    },

    post: function(request, endpoint, request_body) {
      return new Promise((resolve, reject) => {
        request
          .post(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .set('Accept', 'application/json')
          .send(request_body)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('get request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
         });
      });
    }
}

module.exports = apiUtils;