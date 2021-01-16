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
        const user_id = data.user_id;
        const endpoint = urls.endpoint.playlists.list_of_a_users_playlist + user_id + '/playlists';
        return apiUtils.get(request, endpoint).then((response) => {
            let total = response.body.total;
             console.log ('total is: ' + total);
             return expect(total).to.be.greaterThan(10); 
        }).catch((err) => {
            return Promise.reject(err);
        });
    });

    it('GET /Get a Playlist', () => {
        const playlist_id = data.playlist_id;
        const endpoint = urls.endpoint.playlists.get_a_playlist + playlist_id;
        return apiUtils.get(request, endpoint).then((response) => {
            let response_playlist_id = response.body.id;
            console.log(response_playlist_id);
            return expect(playlist_id).to.be.equal(response_playlist_id);
        });
    });
    
})