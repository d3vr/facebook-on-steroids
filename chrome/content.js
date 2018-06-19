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

// Check if a cross-page task needs to be set
window.addEventListener("message", (event) => {
    if(typeof event.data === 'object'){
        if(event.data.registerFosTask){
            chrome.storage.local.set({task: event.data.registerFosTask});
        }
    }
})
// Check if there are any cross-page tasks that need to be executed
window.onload = () => {
    chrome.storage.local.get(["task"], (result) => {
        if(result && result.task){
            window.postMessage({executeFosTask: result.task}, window.location.origin);
            chrome.storage.local.remove(["task"]);
        }
    });
}