'use strict';

 import { expect } from 'chai';
 import request from '../config/common';

 const urls = require('../config/urls.js');
 const apiUtils = require('../lib/apiUtils.js');
 const data = require('../data/data.js');

 describe('Users profile', () => {
     
    it('Get a Users Profile', () => {
        const user_id = data.user_id; 
        const endpoint = urls.endpoint.users_profile.get_a_users_profile + user_id;
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
            if(statusCode === 200) {
                let respose_user_id = response.body.id;
                console.log(respose_user_id);
                return expect(respose_user_id).to.be.equal(user_id);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
        }).catch((err) => {
            return Promise.reject(err);
        })
    });

 })