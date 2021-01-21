'use strict';

module.exports = {
    baseUrl : 'https://api.spotify.com',
    endpoint: {
        playlists: {
            list_of_curr_users_playlist: '/v1/me/playlists',
            list_of_a_users_playlist: '/v1/users/',
            create_a_plalist: '/v1/users/',
            get_a_playlist: '/v1/playlists/',
            remove_items_from_playlist: '/v1/playlists/',
            add_items_to_playlist: '/v1/playlists/'
        },
        users_profile: {
            get_a_users_profile: '/v1/users/'
        },
        search: {
            search_for_an_item: '/v1/search/'
        },
        library: {
            current_users_saved_album: '/v1/me/albums/contains',
            current_users_saved_tracks: '/v1/me/tracks'
        }
    }
};