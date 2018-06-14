'use strict';

import { helpers } from './helpers.js';
import { commands } from './commands.js';

class FOS {
    // Init FOS
    constructor() {
        let fos_html = '<div id="fos_overlay"><form id="fos_command_bar"><input type="text" placeholder="Type command or ? for help"></form></div>';
        this.element = document.body.appendChild(helpers.createElement(fos_html));
        let context = this;
        setTimeout(function(){
            context.element.querySelector("form").addEventListener("submit", function(e){
                let input = context.element.querySelector("input").value;
                context.handleInput(input);

                e.preventDefault();
            });
        });
    }

    // Toggle FOS visibility
    toggle() {
    }

    // Show FOS
    show() {
        this.element.style.display = 'flex';
        this.element.querySelector("input").focus();
    }

    // Hide FOS
    hide() {
        this.element.style.display = 'none';
    }

    // Check whether FOS is visible
    isVisible() {
        return helpers.isVisible(this.element);
    }

    // Handle FOS commands
    handleInput(input){
        let type = input.substring(0, 1);
        let command = input.substring(1);

        switch (type) {
            case '@':
                commands.profile(command, this);
                break;
        
            default:
                break;
        }
    }
}

export { FOS };