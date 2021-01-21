'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');

describe('Library: ', () => {
    it('Check Current Users Saved Albums', () => {
        const plalist_id = data.playlist_id;
        const endpoint = urls.endpoint.library.current_users_saved_album + '?ids=' + plalist_id;
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            return expect(statusCode).to.be.equal(200);
        }).catch((err) => {
            return Promise.reject(err);
        })
    });
});