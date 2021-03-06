'use strict';

import { helpers } from './helpers.js';
import { constants } from './constants.js';
import { choices } from './choices.js';
import { messenger } from './messenger.js';
import { commands } from './commands.js';

class FOS {
    // Init FOS
    constructor() {
        this.registerKeybindings();

        window.fos = {};
        let context = this;

        messenger.register();

        window.onload = () => {
            let fos_html = `
            <div id="fos_overlay">
                <div id="fos_wrapper">
                    <div id="fos_command_bar">
                        <input type="text" id="fos_command_input" autocomplete="off" placeholder="Type command or ? for help">
                    </div>
                    <div id="fos_choices"></div>
                </div>
            </div>`;
            window.fos.element = document.body.appendChild(helpers.createElement(fos_html));
            window.fos.choices = helpers._("#fos_choices", window.fos.element);

            window.fos.params = helpers.getUrlParams();
            setTimeout(function(){
                let input = helpers._("input", window.fos.element);
                input.addEventListener("input", function(e){
                    context.handleInput(input.value);
                });
            });
        }
    }

    // Show FOS
    show(command) {
        command = command || 0;
        window.fos.element.style.display = 'flex';
        let input = helpers._("input", window.fos.element);
        // Initialize with a passed command
        input.value = '';
        if(command)
            input.value = command;
        input.focus();
        this.handleInput(input.value);
    }

    // Hide FOS
    hide() {
        window.fos.element.style.display = 'none';
    }

    // Check whether FOS is visible
    isVisible() {
        return helpers.isVisible(window.fos.element);
    }

    // Handle FOS commands
    handleInput(input){
        let type = input.substring(0, 1);
        let command = input.substring(1).trim();

        let data = [];
        switch (type) {
            // Profiles/Pages/Groups
            case '@':
                data = { choices: window.fos.friends };
                break;
            // FB Navigation
            case '`':
                data = choices.navigate;
                break;
            // Commands
            case '!':
                data = choices.commands;
                break;
            // Hashtags
            case '#':
                data = choices.hashtags(command);
                break;
            // Search
            case '$':
                data = choices.search(command);
                break;
            case '?':
                data = choices.help;
                break;
            default:
                data = {};
                break;
        }

        this.clearChoices();
        if(data.choices){
            if(command !== ''){
                let fs = new Fuse(data.choices, constants.fuse_options(type));
                let results = fs.search(command);
                this.displayChoices(results, type);
            }else{
                this.displayChoices(helpers.fusify(data.choices), type);
            }
        }
    }

    // Clears choices
    clearChoices(){
        window.fos.choices.innerHTML = '';
    }

    // Display choices 
    displayChoices(results, type){
        window.fos.choices.innerHTML = '';

        if(results.length){
            results.forEach((result) => {
                let item = result.item;

                let command = type == '@' ? `navigate.profile('${item.uid}')` : item.command;
                let label = type == '@' ? item.text : item.label;
                let description = type == '@' ? `@${item.alias}${item.subtext ? ', '+item.subtext : ''}` : item.description;
                let photo = type == '@' ? `<img class="fos_choice_img" src="${item.photo}" />` : '';

                let choice_to_insert = 
                `<div class="fos_choice" data-command="${command}">
                    ${photo}
                    <div class="fos_choice_label">${label}</div>
                    <div class="fos_choice_description">${description}</div>
                </div>`;

                window.fos.choices.appendChild(helpers.createElement(choice_to_insert));
            });
            
            window.fos.selected_choice = helpers._(".fos_choice", window.fos.choices);
            window.fos.selected_choice.classList.add("selected");
            window.fos.choices.scrollTop = 0;
        }else{
            window.fos.choices.innerHTML = '<div id="no_choices"> No choices found :( </div>';
        }
    }

    // Select next/previous choice by {numver}
    // number = x => select x choice(s) underneath
    // number = -x => select x choice(s) above
    selectNextChoice(number){
        if(number == 0)
            return;
        
        if(window.fos.choices.children.length>1){
            window.fos.selected_choice.classList.remove("selected");

            let choices = helpers.__(".fos_choice", window.fos.choices);
            let current_index = helpers._i(window.fos.selected_choice, choices);
            let next_selected = choices[current_index+number];

            // Next choice to be selected not found, select last choice
            if(number>0 && !next_selected){
                if(current_index==choices.length-1)
                    next_selected = choices[0];
                else
                    next_selected = choices[choices.length-1];
            }
            // Previous choice to be selected not found, select first choice
            if(number<0 && !next_selected){
                if(current_index==0)
                    next_selected = choices[choices.length-1];
                else
                    next_selected = choices[0];
            }
            next_selected.classList.add("selected");
            window.fos.selected_choice = next_selected;

            // Scroll to the selected choice
            // TODO: Dump 200 and calculate a value dynamically
            window.fos.choices.scrollTop = next_selected.offsetTop - 200;
        }
    }

    registerKeybindings(){
        let context = this;
        document.addEventListener("keydown", function(e){
            // Keep track of the active element before doing anything (used to restore focus)
            // Except for when Esc is pressed (activeElement would probably be command bar which is useless here)
            if(e.keyCode != 27)
                document.oldActiveElement = document.activeElement;

            let is_input = helpers.isInput(e.target);
            let is_mobile = helpers.isMobile();
            let is_command_input = helpers.isCommandInput();
            

            if(!is_input){
                // Dot (Show commands bar)
                if(e.keyCode == 190){
                    context.show();
                    e.preventDefault();
                }
                // Slash (focus search)
                if(!e.shiftKey && e.keyCode == 191){
                    helpers.focusSearch();
                    e.preventDefault();
                }
                // Question mark (show help)
                if(e.shiftKey && e.keyCode == 191){
                    context.show('?');
                    e.preventDefault();
                }

                // Alt+K: scroll up
                if(e.altKey && e.keyCode == 75){
                    if(window.fos.scroll_interval)
                        return;
                    window.fos.scroll_interval = setInterval(() => {
                        window.scrollBy(0, -30);
                    }, window.fos.scroll_interval);
                }

                // Alt+J: scroll down
                if(e.altKey && e.keyCode == 74){
                    if(window.fos.scroll_interval)
                        return;
                    window.fos.scroll_interval = setInterval(() => {
                        window.scrollBy(0, 30);
                    }, window.fos.scroll_interval);
                }

            }

            // Don't interfere with the browser default keybindings for switching tabs
            if(!e.ctrlKey && (is_input && e.altKey || !is_input)){
                // !: Open commands bar in command mode
                if(e.keyCode == 49){
                    context.show('! ');
                    e.preventDefault();
                }
                // @: Open commands bar in profile mode
                if(e.keyCode == 50){
                    context.show('@ ');
                    e.preventDefault();
                }
                // ` or ² (for azerty keyboards): Open commands bar in navigation mode
                if(e.keyCode == 192 || e.keyCode == 222){
                    context.show('` ');
                    e.preventDefault();
                }
                // #: Open commands bar in hashtag mode
                if(e.keyCode == 51){
                    context.show('# ');
                    e.preventDefault();
                }
                // $: Open commands bar in search mode
                if(e.keyCode == 52){
                    context.show('$ ');
                    e.preventDefault();
                }
            }

            // Command choice navigation
            if(is_command_input){
                // Up arrow or Alt+K (select choice on top)
                if(e.keyCode == 38 || e.altKey && e.keyCode == 75){
                    context.selectNextChoice(-1);
                    e.preventDefault();
                }
                // Down arrow or Alt+I (select choice underneath)
                if(e.keyCode == 73 && e.altKey){
                    context.selectNextChoice(-5);
                    e.preventDefault();
                }

                // Down arrow or Alt+J (select choice underneath)
                if(e.keyCode == 40 || e.altKey && e.keyCode == 74){
                    context.selectNextChoice(1);
                    e.preventDefault();
                }
                // Down arrow or Alt+U (select choice underneath)
                if(e.keyCode == 85 && e.altKey){
                    context.selectNextChoice(5);
                    e.preventDefault();
                }

                // Enter: pick choice
                if(e.keyCode == 13){
                    let choice_command = helpers._(".fos_choice.selected").dataset.command;
                    choice_command = choice_command.split(";");
                    choice_command.forEach((cmd) => {
                        eval('commands.'+cmd);   
                    });
                    e.preventDefault();
                }
            }

            // Alt+dot (Open commands bar even when inputs are focused)
            if(e.altKey && e.keyCode == 190){
                context.show();
                e.preventDefault();
            }

            // Esc (hide commands bar)
            if(e.keyCode == 27){
                if(!is_mobile && document.oldActiveElement)
                    document.oldActiveElement.focus();
                context.hide();
            }
        })
        document.addEventListener("keyup", function(e){
            let is_input = helpers.isInput(e.target);
            if(!is_input){
                // Stop scrolling
                if(e.altKey && (e.keyCode == 75 || e.keyCode == 74)){
                    clearInterval(window.fos.scroll_interval);
                    delete window.fos.scroll_interval;
                }
            }
        })
    }
}

export { FOS };