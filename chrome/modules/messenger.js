'use strict';

import { commands } from './commands.js';
import { tasks } from './tasks.js';

class messenger {
    static register(){
        // Execute cross-page tasks if any is found
        window.addEventListener("message", (event) => {
            if(typeof event.data === 'object'){
                if(event.data.executeFosTask){
                    tasks[event.data.executeFosTask]();
                }
                if(event.data.fosFriends){
                    window.fos.friends = event.data.fosFriends;
                }
                if(event.data.pullFosFriends){
                    commands.data.friends();
                }
            }
        })
    }

    static send(data){
        window.postMessage(data, window.location.origin);
    }
}

export { messenger };