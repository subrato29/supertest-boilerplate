'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');

describe('Library: ', () => {
    it('GET /Check Current Users Saved Albums', () => {
        const playlist_id = data.playlist_id;
        const endpoint = urls.endpoint.library.current_users_saved_album + '?ids=' + playlist_id;
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            return expect(statusCode).to.be.equal(200);
        }).catch((err) => {
            return Promise.reject(err);
        })
    });

    it('GET /Get Current Users Saved Tracks', () => {
        const endpoint = urls.endpoint.library.current_users_saved_tracks;
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            if (statusCode === 200) {
                return expect(response.body.limit).to.be.equal(20);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }   
        }).catch((err) => {
            return Promise.reject(err);
        })
    });
});