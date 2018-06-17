'use strict';

let commands = {
    navigate: {
        to: (location) => {
            window.location.href = location;
        },
        mobile: (location) => {
            location = location || 0;
            if(location)
                window.location = 'https://m.facebook.com' + location;
            else
                window.location = 'https://m.facebook.com' + window.location.pathname
        },
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
        refresh: {
            friends: () => {
                console.log('refresh friends');
            },
            groups: () => {
                console.log('refresh groups');
            },
            pages: () => {
                console.log('refresh pages');
            }
        }
    }
}

export { commands };