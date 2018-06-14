'use strict';

import { helpers } from './modules/helpers.js';
import { FOS } from './modules/fos.js';


// Initialize FOS
var fos = new FOS();

// Register keybindings
document.addEventListener("keydown", function(e){
    // console.log(e.keyCode);
    let is_input = helpers.isInput(e.target);
    if(!is_input){
        // Dot
        if(e.keyCode == 190){
            fos.show();
            e.preventDefault();
        }
        // Slash
        if(e.keyCode == 191){
            helpers.focusSearch();
            e.preventDefault();
        }
    }
    if(e.altKey && e.keyCode == 190){
        document.oldActiveElement = document.activeElement;
        fos.show();
        e.preventDefault();
    }

    // ESC
    if(e.keyCode == 27){
        if(document.oldActiveElement)
            document.oldActiveElement.focus();
        fos.hide();
        if(is_input && helpers.isMobile()){
            window.history.back();
        }
    }
})