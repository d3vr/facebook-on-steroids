'use strict';

import { constants } from './constants.js';

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
            let search_input = helpers._(constants.mobile_elements.search_input);
            // Display the search input in case it's hidden
            if(search_input.offsetParent === null){
                helpers._(constants.mobile_elements.search_button).click();
                search_input.focus();
            // If it's already visible, just focus it
            }else{
                search_input.focus();
            }
        // We're on desktop facebook
        }else{
            helpers._(constants.desktop_elements.search_input).focus();
        }
    }

    // Check whether we're on mobile or desktop facebook
    static isMobile(){
        return window.location.host.substring(0, 2) === 'm.';
    }

    static isInput(target){
       return target.nodeName === 'TEXTAREA' || target.nodeName === 'INPUT' || target.nodeName === 'SELECT' || document.activeElement.hasAttribute('contenteditable');
    }

    static isCommandInput(){
        return document.activeElement.hasAttribute('id') && document.activeElement.id == 'fos_command_input';
    }

    static isVisible(element){
        return element.style.display !== 'none';
    }

    // Convert command choice list to Fuse results array (used when search term is empty)
    static fusify(data) {
        if(!data)
            return [];

        let formatted_data = [];
        data.forEach((item) => {
            formatted_data.push({
                item: item
            });
        })

        return formatted_data;
    }

    // Return URL Params
    static getUrlParams(){
        return (new URL(location)).searchParams;
    }

    static _(query, element){
        element = element || 0;
        if(element)
            return element.querySelector(query);
        else
            return document.querySelector(query);
    }

    static __(query, element){
        element = element || 0;
        if(element)
            return element.querySelectorAll(query);
        else
            return document.querySelectorAll(query);
    }
}

export { helpers };