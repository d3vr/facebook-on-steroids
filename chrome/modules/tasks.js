import { constants } from "./constants.js";
import { helpers } from "./helpers.js";

'use strict';

class tasks {
    static createGroup(){
        helpers._(constants.desktop_elements.create_group_button).click();
    }
    static createPublicEvent(){
        helpers._(constants.desktop_elements.create_event_button).click();
        helpers._(constants.desktop_elements.create_public_event_button).click();
    }
    static createPrivateEvent(){
        helpers._(constants.desktop_elements.create_event_button).click();
        helpers._(constants.desktop_elements.create_private_event_button).click();
    }
    static editProfile(){
        helpers._(constants.desktop_elements.edit_profile_button).click();
    }
}

export { tasks };