'use strict';

import supertest from 'supertest';
import { expect } from 'chai';

const urls = require('../config/urls.js');
let apiUtils = require('../lib/apiUtils.js');
const request = supertest(urls.baseUrl);
const data = require('../data/data.js');

describe('Playlists', () => {
    
    it('GET /Get a List of Current Users Playlists', () => {
        const endpoint = urls.endpoint.playlists.list_of_curr_users_playlist;
        return apiUtils.get(request, endpoint).then((response) => {
             let total = response.body.total;
             console.log ('total is: ' + total);
             return expect(total).to.be.greaterThan(10); 
        }).catch((err) => {
            return Promise.reject(err);
        });
    });

    it('GET /Get a List of a Users Playlists', () => {
        const userId = data.userId;
        const endpoint = urls.endpoint.playlists.list_of_a_users_playlist + userId + '/playlists';
        return apiUtils.get(request, endpoint).then((response) => {
            let total = response.body.total;
             console.log ('total is: ' + total);
             return expect(total).to.be.greaterThan(10); 
        }).catch((err) => {
            return Promise.reject(err);
        });
    });
    
})