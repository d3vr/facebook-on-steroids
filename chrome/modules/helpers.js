'use strict';

import { constants } from './constants.js';

// Helper functions
class helpers {

    // Create an element from HTML string
    static createElement(html) {
        var template = document.createElement('template');
        html = html.trim();
        template.innerHTML = html;
        return template.content.firstChild;
    }

    // Focus FB search input
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

    // Check if active element is an input or contenteditable
    static isInput(target){
       return target.nodeName === 'TEXTAREA' || target.nodeName === 'INPUT' || target.nodeName === 'SELECT' || document.activeElement.hasAttribute('contenteditable');
    }

    // Check if the CMDBar input is focused
    static isCommandInput(){
        return document.activeElement.hasAttribute('id') && document.activeElement.id == 'fos_command_input';
    }

    // Check if an element is visible
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

    // Get Facebook user_id
    static getUserId(){
        let c = document.cookie;
        let user_index = c.indexOf('c_user=');
        return c.substring(user_index+7, c.indexOf(';', user_index));
    }

    // Get element's index from list of elements
    static _i(elem, elems){
        return Array.prototype.indexOf.call(elems, elem);
    }

    // Select element
    static _(query, element){
        element = element || 0;
        if(element)
            return element.querySelector(query);
        else
            return document.querySelector(query);
    }

    // Select elements
    static __(query, element){
        element = element || 0;
        if(element)
            return element.querySelectorAll(query);
        else
            return document.querySelectorAll(query);
    }
}

export { helpers };