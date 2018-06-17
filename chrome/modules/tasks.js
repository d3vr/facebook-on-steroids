import { constants } from "./constants.js";
import { helpers } from "./helpers.js";

'use strict';

class tasks {
    static createGroup(){
        helpers._(constants.desktop_elements.create_group_button).click();
    }
    static createPublicEvent(){
        console.log("public");
    }
    static createPrivateEvent(){
        console.log("private");
    }
    static editProfile(){
        console.log("edit profile");
    }
    static viewProfileAs(){
        console.log("view profile as");
    }
    static createPhotoAlbum(){
        console.log("create album");
    }
}

export { tasks };