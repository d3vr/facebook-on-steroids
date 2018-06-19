'use strict';

// Load fuse.js before main.js, we need it to be available when we first initialize FOS.
const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
const fuse = document.createElement('script');
fuse.setAttribute("src", chrome.extension.getURL('modules/fuse.js'));
head.insertBefore(fuse, head.lastChild);

// Inject main.js which initializes FOS
const main = document.createElement('script');
main.setAttribute("type", "module");
main.setAttribute("src", chrome.extension.getURL('main.js'));
head.insertBefore(main, head.lastChild);

// Debugging only
// chrome.storage.local.clear(function() {
//     var error = chrome.runtime.lastError;
//     if (error) {
//         console.error(error);
//     }
// });