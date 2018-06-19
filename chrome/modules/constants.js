'use strict';

class constants {
    static get mobile_elements() {
        return {
            'search_button': '#u_0_i',
            'search_input': '#main-search-input'
        }
    }
    static get desktop_elements() {
        return {
            'search_input': '#js_j',
            'create_group_button': '[ajaxify="/ajax/groups/create_get/?ref=group_browse"]',
            'edit_profile_button': '[ajaxify="/profile/edit/public/show/"]',
            'create_event_button': '[data-testid="event-create-split-menu"]',
            'create_private_event_button': '[ajaxify$="&default_user_event_privacy_type=private_event"]',
            'create_public_event_button': '[ajaxify$="&default_user_event_privacy_type=public_event"]',
        }
    }
    static get fuse_options(){
        return {
            shouldSort: true,
            findAllMatches: true,
            includeMatches: true,
            threshold: 0.6,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: [
                "label",
                "description",
                "command"
            ]
        }
    }

    static get scroll_speed(){
        return 10;
    }
}

export { constants };