'use strict';

module.exports = {
    baseUrl : 'https://api.spotify.com',
    endpoint: {
        playlists: {
            list_of_curr_users_playlist: '/v1/me/playlists',
            list_of_a_users_playlist: '/v1/users/',
            get_a_playlist: '/v1/playlists/'
        }
    }
};