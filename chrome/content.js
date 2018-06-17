'use strict';

const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
const fuse = document.createElement('script');
fuse.setAttribute("src", chrome.extension.getURL('modules/fuse.js'));
head.insertBefore(fuse, head.lastChild);

const main = document.createElement('script');
main.setAttribute("type", "module");
main.setAttribute("src", chrome.extension.getURL('main.js'));
head.insertBefore(main, head.lastChild);