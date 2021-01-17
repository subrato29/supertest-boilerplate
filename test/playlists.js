'use strict';

import supertest from 'supertest';
import { expect } from 'chai';

const urls = require('../config/urls.js');
const apiUtils = require('../lib/apiUtils.js');
const request = supertest(urls.baseUrl);
const data = require('../data/data.js');
const commonUtils = require('../lib/commonUtils.js')

describe('Playlists', () => {
    
    it('GET /Get a List of Current Users Playlists', () => {
        const endpoint = urls.endpoint.playlists.list_of_curr_users_playlist;
        return apiUtils.get(request, endpoint).then((response) => {
             let statusCode = response.status;
             if(statusCode === 200) {
                let total = response.body.total;
                console.log ('total is: ' + total);
                return expect(total).to.be.greaterThan(10); 
             } else {
                 throw new Error('Unexpected status code: ' + statusCode);
             }
        }).catch((err) => {
            return Promise.reject(err);
        });
    });

    it('GET /Get a List of a Users Playlists', () => {
        const user_id = data.user_id;
        const endpoint = urls.endpoint.playlists.list_of_a_users_playlist + user_id + '/playlists';
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
             if(statusCode === 200) {
                let total = response.body.total;
                console.log ('total is: ' + total);
                return expect(total).to.be.greaterThan(10); 
             } else {
                 throw new Error('Unexpected status code: ' + statusCode);
             }
        }).catch((err) => {
            return Promise.reject(err);
        });
    });

    it('GET /Get a Playlist', () => {
        const playlist_id = data.playlist_id;
        const endpoint = urls.endpoint.playlists.get_a_playlist + playlist_id;
        return apiUtils.get(request, endpoint).then((response) => {
            let statusCode = response.status;
             if(statusCode === 200) {
                let response_playlist_id = response.body.id;
                console.log(response_playlist_id);
                return expect(playlist_id).to.be.equal(response_playlist_id);
             } else {
                 throw new Error('Unexpected status code: ' + statusCode);
             }
        }).catch((err) => {
            return Promise.reject(err);
        });
    });

    it.skip('POST /Create a Playlist', () => {
        const user_id = data.user_id;
        const endpoint = urls.endpoint.playlists.create_a_plalist + user_id + '/playlists';
        const request_body = data.request_body.post;
        return apiUtils.post(request, endpoint, request_body).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            if (statusCode === 201) {
                let response_body = response.body;
                commonUtils.log(response_body);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
        }).catch((err) => {
            return Promise.reject(err);
        })
    });

    it('POST /Add Items to a Playlist', () => {
        const playlist_id = data.playlist_id_to_update;
        const endpoint = urls.endpoint.playlists.add_items_to_playlist + playlist_id + '/tracks';
        const request_body = {'uris': commonUtils.get_array_of_uri(data.request_body.post_tracks)};
        return apiUtils.post(request, endpoint, request_body).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            if (statusCode === 201) {
                let response_body = response.body;
                commonUtils.log(response_body);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);
            }
        }).catch((err) => {
            return Promise.reject(err);
        })
    });

    it.skip('PUT /Change a Playlist Details', () => {
        const playlist_id = data.playlist_id_to_update;
        const endpoint = urls.endpoint.playlists.get_a_playlist + playlist_id;
        const request_body = data.request_body.put;
        return apiUtils.put(request, endpoint, request_body).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            return expect(statusCode).to.be.equals(200);
        }).catch((err) => {
            return Promise.reject(err);
        })
    });

    it('DELETE /Remove Items from a Playlist', () => {
        const playlist_id = data.playlist_id_to_update;
        const endpoint = urls.endpoint.playlists.remove_items_from_playlist + playlist_id + '/tracks';
        const request_body = {'tracks': commonUtils.get_array_of_object_uri(data.request_body.post_tracks)};
        return apiUtils.delete(request, endpoint, request_body).then((response) => {
            let statusCode = response.status;
            console.log(statusCode);
            if (statusCode === 200) {
                commonUtils.log(response.body);
            } else {
                throw new Error('Unexpected status code: ' + statusCode);;
            }
        }).catch((err) => {
            Promise.reject(err);
        })
    })
    
})