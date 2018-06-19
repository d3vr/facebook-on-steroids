'use strict';

import { helpers } from './helpers.js';
import { messenger } from './messenger.js';

let commands = {
    navigate: {
        // Navigate to given location
        to: (location) => {
            window.location.href = location;
        },
        // Navigate to user profile
        profile: (user_id) => {
            commands.navigate.to('/profile.php?id='+user_id);
        },
        // Navigate to mobile version of given location or to the homepage
        mobile: (location) => {
            location = location || 0;
            if(location)
                window.location = 'https://m.facebook.com' + location;
            else
                window.location = 'https://m.facebook.com' + window.location.pathname
        },
        // Navigate to desktop version of given location or to the homepage
        desktop: (location) => {
            location = location || 0;
            if(location)
                window.location = 'https://facebook.com' + location;
            else
                window.location = 'https://facebook.com' + window.location.pathname
        },
    },
    data: {
    // TODO
        friends: () => {
            let o = window.location.origin;
            let user_id = helpers.getUserId();

            // Get token
            let token;
            fetch(`${o}/ajax/typeahead/search/facebar/bootstrap/?filter[0]=user&context=facebar&viewer=${user_id}&token=v7&lazy=1&__user=${user_id}&__a=1`, {"credentials":"omit","headers":{},"referrer": o,"referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"}).then((res) => {
                return res.text();
            }).then((txt) => {
                token = JSON.parse(txt.substring(9)).payload.token;

                fetch(`${o}/ajax/typeahead/search/facebar/bootstrap/?filter[0]=user&context=facebar&viewer=${user_id}&token=${token}&__user=${user_id}&__a=1`, {"credentials":"omit","headers":{},"referrer": o,"referrerPolicy":"origin-when-cross-origin","body":null,"method":"GET","mode":"cors"}).then((res) => {
                    return res.text();
                }).then((txt) => {
                    let friends = JSON.parse(txt.substring(9)).payload.entries.filter((user) => {
                        return user.is_connected;
                    });
                    messenger.send({registerFosFriends: friends});
                    window.fos.friends = friends;
                });
            });
        },
        groups: () => {
            console.log('refresh groups');
        },
        pages: () => {
            console.log('refresh pages');
        }
    },
    // Cross-page tasks (e.g: Create group)
    tasks: {
        add: (task) => {
            messenger.send({registerFosTask: task});
        }
    }
}

export { commands };