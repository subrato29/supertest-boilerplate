'use strict';

import supertest from 'supertest';

const baseUrl = require('../config/urls.js');
let apiUtils = require('../lib/apiUtils.js');
const request = supertest(baseUrl.baseUrl);
const commonUtils = require('../lib/commonUtils.js')

describe('Playlists', () => {
    it('GET /Get a List of Current Users Playlists', () => {
        const endpoint = '/v1/me/playlists';
        apiUtils.get(request, endpoint).then((response) => {
            console.log(response);
        })
    });
})