'use strict';

import { variables } from './variables.js';

// Helper functions
class helpers {
    static createElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }

    static focusSearch(){
        // We're on mobile facebook
        if(helpers.isMobile()){
            let search_input = document.querySelector();
            // Display the search input in case it's hidden
            if(search_input.offsetParent === null){
                
            // If it's already visible, just focus it
            }else{
                search_input.focus();
            }

        // We're on desktop facebook
        }else{

        }
    }

    // Check whether we're on mobile or desktop facebook
    static isMobile(){
        return window.location.host.substring(0, 2) === 'm.';
    }

    static isInput(target){
       return target.nodeName === 'TEXTAREA' || target.nodeName === 'INPUT' || target.nodeName === 'SELECT';
    }

    static isVisible(element){
        return element.offsetParent === null;
    }
}

export { helpers };