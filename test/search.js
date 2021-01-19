'use strict';

import { expect } from 'chai';
import request from '../config/common';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const data = require('../data/data.js');

describe('Search', () => {
    it('Search for an Item', () => {
        const endpoint = urls.endpoint.search.search_for_an_item;
        let q = data.search.search_for_an_artist.q;
        let type = data.search.search_for_an_artist.type;
        return apiUtils.search(request, endpoint, q, type).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            if(statusCode === 200) {
                let total = response.body.artists.total;
                return expect(total).to.be.greaterThan(100);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
        }).catch((err) => {
            return Promise.reject(err);
        }); 
    });
});