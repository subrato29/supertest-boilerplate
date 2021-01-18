'use strict';

require('dotenv').config();

const commonUtils = require('../lib/commonUtils.js')
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
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
              commonUtils.err('post request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
         });
      });
    },

    put: function(request, endpoint, request_body) {
      return new Promise((resolve, reject) => {
        request
          .put(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
          .set('Accept', 'application/json')
          .send(request_body)
          .end((err, res) => {
            if (err === 'null' || err === 'undefined') {
              commonUtils.err('put request: ' + err);
              reject (err);
            } else {
              resolve (res);
            }
         });
      });
    },

    delete: function(request, endpoint, request_body) {
      return new Promise((resolve, reject) => {
        request
          .delete(endpoint)
          .set('Authorization', 'Bearer ' +  ACCESS_TOKEN)
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