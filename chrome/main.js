'use strict';

import { helpers } from './modules/helpers.js';
import { FOS } from './modules/fos.js';


// Initialize FOS
var fos = new FOS();

// Register keybindings
document.addEventListener("keydown", function(e){
    // console.log(e.keyCode);

    if(!helpers.isInput(e.target)){
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

    // ESC
    if(e.keyCode == 27)
        fos.hide();
})