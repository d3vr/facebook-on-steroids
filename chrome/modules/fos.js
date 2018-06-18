'use strict';

import { helpers } from './helpers.js';
import { constants } from './constants.js';
import { choices } from './choices.js';
import { commands } from './commands.js';
import { tasks } from './tasks.js';

class FOS {
    // Init FOS
    constructor() {
        this.registerKeybindings();

        window.fos = {};
        let context = this;
        window.onload = () => {
            let fos_html = 
                '<div id="fos_overlay">'+
                    '<div id="fos_wrapper">'+
                        '<div id="fos_command_bar">'+
                            '<input type="text" id="fos_command_input" autocomplete="off" placeholder="Type command or ? for help">'+
                        '</div>'+
                        '<div id="fos_choices"></div>'+
                    '</div>'+
                '</div>';
            window.fos.element = document.body.appendChild(helpers.createElement(fos_html));
            window.fos.choices = helpers._("#fos_choices", window.fos.element);

            window.fos.params = helpers.getUrlParams();
            setTimeout(function(){
                let input = helpers._("input", window.fos.element);
                helpers._("#fos_command_bar", window.fos.element).addEventListener("submit", function(e){
                });
                input.addEventListener("input", function(e){
                    context.handleInput(input.value);
                });

                if(window.fos.params.has('fos-task')){
                    tasks[window.fos.params.get('fos-task')]();
                }
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
                data = choices.profile;
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
                data = choices.hashtags;
                data.choices = [
                    {
                        label: '#'+command+' (Everything)',
                        command: 'navigate.to(\'/hashtag/'+command+'\')',
                        description: 'Go to the hastag\'s page'
                    },
                    {
                        label: '#'+command+' (Posts By You)',
                        command: 'navigate.to(\'/hashtag/'+command+'?filters_rp_author=%7B%22name%22%3A%22author_me%22%2C%22args%22%3A%22%22%7D&ref=side_filter\')',
                        description: 'Go to the hastag\'s page'
                    },
                    {
                        label: '#'+command+' (Posts By Your Friends and Groups)',
                        command: 'navigate.to(\'/hashtag/'+command+'?filters_rp_author=%7B%22name%22%3A%22author_friends_groups%22%2C%22args%22%3A%22%22%7D\')',
                        description: 'Go to the hastag\'s page'
                    },
                    {
                        label: '#'+command+' (Posts You\'ve Seen)',
                        command: 'navigate.to(\'/hashtag/'+command+'?filters_interacted_posts=%7B%22name%22%3A%22interacted_posts%22%2C%22args%22%3A%22%22%7D&ref=side_filter\')',
                        description: 'Go to the hastag\'s page'
                    },
                    {
                        label: '#'+command+' (Posts in Your Groups)',
                        command: 'navigate.to(\'/hashtag/'+command+'?filters_rp_group=%7B%22name%22%3A%22my_groups_posts%22%2C%22args%22%3A%22%22%7D&ref=side_filter\')',
                        description: 'Go to the hastag\'s page'
                    },
                ]
                break;
            // Search
            case '$':
                data = choices.search;
                data.choices = [
                    {
                        label: 'All results for: '+command,
                        command: 'navigate.to(\'/search/str/'+escape(command)+'/keywords_search/\')',
                        description: 'All results matching the search term'
                    },
                    {
                        label: 'People matching: '+command,
                        command: 'navigate.to(\'/search/people/?q='+escape(command)+'\')',
                        description: 'All people matching the search term'
                    },
                    {
                        label: 'Photos matching: '+command,
                        command: 'navigate.to(\'/search/photos/?q='+escape(command)+'\')',
                        description: 'All photos matching the search term'
                    },
                    {
                        label: 'Videos matching: '+command,
                        command: 'navigate.to(\'/search/videos/?q='+escape(command)+'\')',
                        description: 'All videos matching the search term'
                    },
                    {
                        label: 'Pages matching: '+command,
                        command: 'navigate.to(\'/search/pages/?q='+escape(command)+'\')',
                        description: 'All pages matching the search term'
                    },
                    {
                        label: 'Verified Pages matching: '+command,
                        command: 'navigate.to(\'/search/pages/?q='+escape(command)+'&filters_verified=%7B%22name%22%3A%22pages_verified%22%2C%22args%22%3A%22%22%7D\')',
                        description: ''
                    },
                    {
                        label: 'Places matching: '+command,
                        command: 'navigate.to(\'/search/places/?q='+escape(command)+'\')',
                        description: 'All places matching the search term'
                    },
                    {
                        label: 'Groups matching: '+command,
                        command: 'navigate.to(\'/search/groups/?q='+escape(command)+'\')',
                        description: 'All groups matching the search term'
                    },
                    {
                        label: 'Apps matching: '+command,
                        command: 'navigate.to(\'/search/apps/?q='+escape(command)+'\')',
                        description: 'All apps matching the search term'
                    },
                    {
                        label: 'Events matching: '+command,
                        command: 'navigate.to(\'/search/events/?q='+escape(command)+'\')',
                        description: 'All events matching the search term'
                    },
                ];
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
                let options = constants.fuse_options;
                // Don't sort choices for Hashtag and Search modes
                if(type == '#' || type == '$')
                    options = Object.assign(options, { shouldSort: false });
                let fs = new Fuse(data.choices, options);
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
                let choice_to_insert = 
                '<div class="fos_choice" data-command="'+item.command+'">'+
                    (type == '@' ? '<img class="fos_choice_img" src="https://placekitten.com/35/35" />' : '')+
                    '<div class="fos_choice_label">'+item.label+'</div>'+
                    '<div class="fos_choice_description">'+item.description+'</div>'+
                '</div>';
                window.fos.choices.appendChild(helpers.createElement(choice_to_insert));
            });
            
            window.fos.selected_choice = helpers._(".fos_choice", window.fos.choices);
            window.fos.selected_choice.classList.add("selected");
            window.fos.choices.scrollTop = 0;
        }else{
            window.fos.choices.innerHTML = '<div id="no_choices"> No choices found :( </div>';
        }
    }

    // Select choice above
    selectChoiceAbove(){
        if(window.fos.choices.children.length>1){
            window.fos.selected_choice.classList.remove("selected");

            let next_selected;
            if(window.fos.selected_choice.previousSibling){
                next_selected = window.fos.selected_choice.previousSibling;
                next_selected.classList.add("selected");
                window.fos.selected_choice = next_selected;
            }else{
                next_selected = window.fos.choices.children[window.fos.choices.children.length-1];
                next_selected.classList.add("selected");
                window.fos.selected_choice = next_selected;
            }
            // Scroll to the selected choice
            // TODO: Dump 200 and calculate a value dynamically
            window.fos.choices.scrollTop = next_selected.offsetTop - 200;
        }
    }
    // Select choice underneath
    selectChoiceUnderneath(){
        if(window.fos.choices.children.length>1){
            window.fos.selected_choice.classList.remove("selected");

            let next_selected;
            if(window.fos.selected_choice.nextSibling){
                next_selected = window.fos.selected_choice.nextSibling;
                next_selected.classList.add("selected");
                window.fos.selected_choice = next_selected;
            }else{
                next_selected = window.fos.choices.children[0];
                next_selected.classList.add("selected");
                window.fos.selected_choice = next_selected;
            }
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
                        window.scrollBy(0, -15);
                    }, window.fos.scroll_interval);
                }

                // Alt+J: scroll down
                if(e.altKey && e.keyCode == 74){
                    if(window.fos.scroll_interval)
                        return;
                    window.fos.scroll_interval = setInterval(() => {
                        window.scrollBy(0, 15);
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
                    context.selectChoiceAbove();
                    e.preventDefault();
                }
                // Down arrow or Alt+J (select choice underneath)
                if(e.keyCode == 40 || e.altKey && e.keyCode == 74){
                    context.selectChoiceUnderneath();
                    e.preventDefault();
                }

                // Enter: pick choice
                if(e.keyCode == 13){
                    eval('commands.'+helpers._(".fos_choice.selected").dataset.command);   
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
                // Alt+K: scroll up
                if(e.altKey && (e.keyCode == 75 || e.keyCode == 74)){
                    clearInterval(window.fos.scroll_interval);
                    delete window.fos.scroll_interval;
                }
            }
        })
    }
}

export { FOS };