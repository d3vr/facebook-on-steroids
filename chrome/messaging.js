//  Handle the messaging between the content script and the rest of the modules 

// Check if a cross-page task needs to be set
window.addEventListener("message", (event) => {
    if(typeof event.data === 'object'){
        if(event.data.registerFosTask){
            chrome.storage.local.set({task: event.data.registerFosTask});
        }
        if(event.data.registerFosFriends){
            console.log("Storing friends");
            chrome.storage.local.set({friends: event.data.registerFosFriends});
        }
    }
})
// Check if there are any cross-page tasks that need to be executed
window.onload = () => {
    chrome.storage.local.get(["task", "friends"], (result) => {
        if(result){
            if(result.task){
                window.postMessage({executeFosTask: result.task}, window.location.origin);
                chrome.storage.local.remove(["task"]);
            }
            if(result.friends){
                console.log("Friends found, retrieving..");
                window.postMessage({fosFriends: result.friends}, window.location.origin);
            }else{
                window.postMessage({pullFosFriends: 1}, window.location.origin);
            }
        }
    });
}