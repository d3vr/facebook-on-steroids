'use strict';

import { commands } from './commands.js';

class choices {
    // @ Profile choices
    // TODO: Get list from friend list extractor plus fb search results
    static get profile(){
        return {
            helper: 'Navigate to profiles',
            choices: [
                {
                    label: 'Me',
                    command: 'navigate.to(\'profile.php\')',
                    description: 'My profile'
                },
            ]
        }
    }
    // ` Navigate to different parts of fb
    static get navigate(){
        return {
            helper: 'Navigate to places',
            choices: [
                {
                    label: 'Home',
                    command: 'navigate.to(\'/\')',
                    description: 'Go to homepage'
                },
                {
                    label: 'Messages',
                    command: 'navigate.to(\'/messages\')',
                    description: 'Go to messages'
                },
                {
                    label: 'Notifications',
                    command: 'navigate.to(\'/notifications\')',
                    description: 'Go to notifications page'
                },
                {
                    label: 'Profile',
                    command: 'navigate.to(\'/me\')',
                    description: 'Go to my profile page'
                },
                {
                    label: 'Profile > About',
                    command: 'navigate.to(\'/me/about\')',
                    description: 'Go to my profile\'s about page'
                },
                {
                    label: 'Profile > View As',
                    command: 'navigate.to(\'/me?viewas=100000686899395\')',
                    description: 'View your profile as another person'
                },
                {
                    label: 'Edit profile',
                    command: 'tasks.add(\'editProfile\');navigate.to(\'/me\')',
                    description: 'Edit your profile'
                },
                {
                    label: 'Friends',
                    command: 'navigate.to(\'/me/friends\')',
                    description: 'Go to friends page'
                },
                {
                    label: 'Friends > New Posts',
                    command: 'navigate.to(\'/me/friends_with_unseen_posts\')',
                    description: 'List of friends with new posts'
                },
                {
                    label: 'Friends > Upcoming Birthdays',
                    command: 'navigate.to(\'/me/friends_with_upcoming_birthdays\')',
                    description: 'List of friends with upcoming birthdays'
                },
                {
                    label: 'Friends > Work',
                    command: 'navigate.to(\'/me/friends_work\')',
                    description: 'List of friends from the same workplace'
                },
                {
                    label: 'Friends > College',
                    command: 'navigate.to(\'/me/friends_college\')',
                    description: 'List of friends from the same college'
                },
                {
                    label: 'Friends > High School',
                    command: 'navigate.to(\'/me/friends_high_school\')',
                    description: 'List of friends from the same high schcool'
                },
                {
                    label: 'Friends > Current City',
                    command: 'navigate.to(\'/me/friends_current_city\')',
                    description: 'List of friends from the same current city'
                },
                {
                    label: 'Friends > Hometown',
                    command: 'navigate.to(\'/me/friends_hometown\')',
                    description: 'List of friends from your hometown'
                },
                {
                    label: 'Find Friends',
                    command: 'navigate.to(\'/find-friends/browser/\')',
                    description: 'Find f'
                },
                {
                    label: 'Friend requests',
                    command: 'navigate.to(\'/friends/requests/\')',
                    description: 'Go to friend requests page'
                },
                {
                    label: 'Followers',
                    command: 'navigate.to(\'/me/followers\')',
                    description: 'List of followers'
                },
                {
                    label: 'Following',
                    command: 'navigate.to(\'/me/following\')',
                    description: 'List of people you\'re following'
                },
                {
                    label: 'Profile > Photos > Photos of You',
                    command: 'navigate.to(\'/me/photos_of\')',
                    description: 'Go to my photos page'
                },
                {
                    label: 'Profile > Photos > My Photos',
                    command: 'navigate.to(\'/me/photos_all\')',
                    description: 'Go to my photos page'
                },
                {
                    label: 'Profile > Photos > My Albums',
                    command: 'navigate.to(\'/me/photos_albums\')',
                    description: 'Go to my photo albums'
                },
                {
                    label: 'Profile > Videos > Videos You\'re Tagged In',
                    command: 'navigate.to(\'/me/videos_of\')',
                    description: 'Go to my videos page'
                },
                {
                    label: 'Profile > Videos > Videos You Uploaded',
                    command: 'navigate.to(\'/me/videos_by\')',
                    description: 'Go to my videos page'
                },
                {
                    label: 'Events > All',
                    command: 'navigate.to(\'/events\')',
                    description: 'Go to events page'
                },
                {
                    label: 'Events > Calendar',
                    command: 'navigate.to(\'/events/calendar\')',
                    description: ''
                },
                {
                    label: 'Events > Birthdays',
                    command: 'navigate.to(\'/events/birthdays\')',
                    description: ''
                },
                {
                    label: 'Events > Discover',
                    command: 'navigate.to(\'/events/discovery\')',
                    description: ''
                },
                {
                    label: 'Events > Past',
                    command: 'navigate.to(\'/events/past\')',
                    description: ''
                },
                {
                    label: 'Events > Create Public Event',
                    command: 'tasks.add(\'createPublicEvent\');navigate.to(\'/events\')',
                    description: 'Create a public event'
                },
                {
                    label: 'Events > Create Private Event',
                    command: 'tasks.add(\'createPrivateEvent\');navigate.to(\'/events\')',
                    description: 'Create a private event'
                },
                {
                    label: 'Marketplace',
                    command: 'navigate.to(\'/marketplace\')',
                    description: 'Go to marketplace'
                },
                {
                    label: 'Marketplace > Groups',
                    command: 'navigate.to(\'/marketplace/grooups\')',
                    description: 'Go to marketplace groups'
                },
                {
                    label: 'Marketplace > Buying',
                    command: 'navigate.to(\'/marketplace/buying\')',
                    description: 'Keep track of items you\'re buying'
                },
                {
                    label: 'Marketplace > Selling',
                    command: 'navigate.to(\'/marketplace/selling\')',
                    description: 'Keep track of items you\'re selling'
                },
                {
                    label: 'Marketplace > Collections (Saved)',
                    command: 'navigate.to(\'/marketplace/saved_collections\')',
                    description: 'List of items you saved from the marketplace'
                },
                {
                    label: 'Marketplace > Sell Something',
                    command: 'navigate.to(\'/marketplace\')',
                    description: 'Sell an item'
                },
                {
                    label: 'Privacy Shortcuts',
                    command: 'navigate.to(\'/privacy/\')',
                    description: 'Go to privacy shortcuts page'
                },
                {
                    label: 'Settings > General',
                    command: 'navigate.to(\'/settings\')',
                    description: 'Go to settings page'
                },
                {
                    label: 'Settings > Security and Login',
                    command: 'navigate.to(\'/settings?tab=security\')',
                    description: ''
                },
                {
                    label: 'Settings > Your Facebook Information',
                    command: 'navigate.to(\'/settings?tab=your_facebook_information\')',
                    description: ''
                },
                {
                    label: 'Settings > Privacy',
                    command: 'navigate.to(\'/settings?tab=privacy\')',
                    description: ''
                },
                {
                    label: 'Settings > Timeline and Tagging',
                    command: 'navigate.to(\'/settings?tab=timeline\')',
                    description: ''
                },
                {
                    label: 'Settings > Location',
                    command: 'navigate.to(\'/settings?tab=location\')',
                    description: ''
                },
                {
                    label: 'Settings > Blocking',
                    command: 'navigate.to(\'/settings?tab=blocking\')',
                    description: ''
                },
                {
                    label: 'Settings > Language',
                    command: 'navigate.to(\'/settings?tab=language\')',
                    description: ''
                },
                {
                    label: 'Settings > Language',
                    command: 'navigate.to(\'/settings?tab=facerec\')',
                    description: ''
                },
                {
                    label: 'Settings > Notifications',
                    command: 'navigate.to(\'/settings?tab=notifications\')',
                    description: ''
                },
                {
                    label: 'Settings > Mobile',
                    command: 'navigate.to(\'/settings?tab=mobile\')',
                    description: ''
                },
                {
                    label: 'Settings > Public Posts',
                    command: 'navigate.to(\'/settings?tab=followers\')',
                    description: ''
                },
                {
                    label: 'Settings > Apps and Websites',
                    command: 'navigate.to(\'/settings?tab=applications\')',
                    description: ''
                },
                {
                    label: 'Settings > Business Integrations',
                    command: 'navigate.to(\'/settings?tab=business_tools\')',
                    description: ''
                },
                {
                    label: 'Settings > Ads',
                    command: 'navigate.to(\'/settings?tab=ads\')',
                    description: ''
                },
                {
                    label: 'Settings > Payments',
                    command: 'navigate.to(\'/settings?tab=payments\')',
                    description: ''
                },
                {
                    label: 'Settings > Videos',
                    command: 'navigate.to(\'/settings?tab=videos\')',
                    description: ''
                },
                {
                    label: 'Support Inbox',
                    command: 'navigate.to(\'/support\')',
                    description: ''
                },
                {
                    label: 'Groups > Discover groups',
                    command: 'navigate.to(\'/groups/?category=discover\')',
                    description: 'Go to groups discovery page'
                },
                {
                    label: 'Groups > My groups',
                    command: 'navigate.to(\'/groups\')',
                    description: 'Go to groups page: lists groups you manage and/or are a member of, as well as groups that you request to join but request is pending'
                },
                {
                    label: 'Groups > Create group',
                    command: 'tasks.add(\'createGroup\');navigate.to(\'/groups\')',
                    description: 'Create a facebook group'
                },
                {
                    label: 'Pages > My pages',
                    command: 'navigate.to(\'/bookmarks/pages\')',
                    description: 'Go to list of pages you manage'
                },
                {
                    label: 'Pages > Create page',
                    command: 'navigate.to(\'/pages/create/\')',
                    description: 'Create a facebook page'
                },
                {
                    label: 'Pages > Top suggestions',
                    command: 'navigate.to(\'/pages/?category=top\')',
                    description: 'Page suggestions by facebook'
                },
                {
                    label: 'Pages > Liked pages',
                    command: 'navigate.to(\'/pages/?category=liked\')',
                    description: 'List of pages you like'
                },
                {
                    label: 'Pages > Local picks',
                    command: 'navigate.to(\'/pages/?category=subscriptions\')',
                    description: 'List of suggested pages for your local area'
                },
                {
                    label: 'Pages > Invites',
                    command: 'navigate.to(\'/pages/?category=invites\')',
                    description: 'List of pages that you were invited to like'
                },
                // {
                //     label: 'Create Ads',
                //     command: 'navigate.to(\'/ad_campaign/landing.php\')',
                //     description: 'Facebook advertising'
                // },
                {
                    label: 'Activity Log > All activity',
                    command: 'navigate.to(\'/me/allactivity\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Timeline Review',
                    command: 'navigate.to(\'/me/allactivity?privacy_source=activity_log&log_filter=review\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Photo Review',
                    command: 'navigate.to(\'/me/allactivity?privacy_source=activity_log&log_filter=photoreview\')',
                    description: 'Photo review'
                },
                {
                    label: 'Activity Log > Photo Review',
                    command: 'navigate.to(\'/me/allactivity?privacy_source=activity_log&log_filter=photoreview\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Posts',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_11\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Posts You\'re Tagged In',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_200\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Others\' Posts To Your Timeline',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_5\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Hidden From Timeline',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=hidden\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Photos and Videos',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=photos\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Likes and Reactions',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=likes\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Comments',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_116\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Profile',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_17\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Added Friends',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=friends\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Life Events',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_202\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Songs You\'ve Listened To',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=app_221226937919712\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Artcles You\'ve Read',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=app_142960719118076\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Movies and TV',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=app_189414627776674\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Games',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=app_249944898349166\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Books',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=app_332953846789204\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Products You Wanted',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=app_201042489952942\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Notes',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_12\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Videos You Watched',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=videowatch\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Following',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_115\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Groups',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=groups\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Events',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_2\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Polls',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_105\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Search history',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=search\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Location History',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=cluster_222\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Saved',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=saved\')',
                    description: 'Search history'
                },
                {
                    label: 'Activity Log > Your Places',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=yourplaces\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Security and Login',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=securitylogin\')',
                    description: ''
                },
                {
                    label: 'Activity Log > Apps',
                    command: 'navigate.to(\'/me/allactivity/?privacy_source=activity_log&log_filter=apps\')',
                    description: ''
                },
                {
                    label: 'Desktop version (homepage)',
                    command: 'navigate.desktop(\'/\')',
                    description: 'Go to desktop homepage'
                },
                {
                    label: 'Desktop version (page)',
                    command: 'navigate.desktop()',
                    description: 'Same page in desktop version'
                },
                {
                    label: 'Mobile version (homepage)',
                    command: 'navigate.mobile(\'/\')',
                    description: 'Go to mobile homepage'
                },
                {
                    label: 'Mobile version (page)',
                    command: 'navigate.mobile()',
                    description: 'Same page in desktop version'
                },
                {
                    label: 'Translations',
                    command: 'navigate.to(\'/translations\')',
                    description: 'Same page in desktop version'
                },
                {
                    label: 'Help',
                    command: 'navigate.to(\'/help\')',
                    description: 'Go to help page'
                },
                {
                    label: 'Help > Cookies',
                    command: 'navigate.to(\'/help/cookies\')',
                    description: 'Go to help page about cookies'
                },
                {
                    label: 'Help > Search Basics',
                    command: 'navigate.to(\'/search\')',
                    description: 'Go to help page about search basics'
                },
                {
                    label: 'Developers',
                    command: 'navigate.to(\'https://developers.facebook.com/\')',
                    description: 'Go to help page about cookies'
                },
                {
                    label: 'About Facebook',
                    command: 'navigate.to(\'/about\')',
                    description: 'Go to Facebook\'s about page'
                },
            ]

        }
    }
    // ! FOS commands
    static get commands(){
        return {
            helper: 'Commands to do stuff',
            choices: [
                {
                    label: 'Refresh friends list',
                    command: 'data.friends()',
                    description: 'Dump the cached list of friends and pull a fresh version'
                },
                {
                    label: 'Refresh pages list',
                    command: 'data.pages()',
                    description: 'Dump the cached list of liked pages and pull a fresh version'
                },
                {
                    label: 'Refresh groups list',
                    command: 'data.groups()',
                    description: 'Dump the cached list of groups you manage and are a member of pull a fresh version'
                },
            ]
        }
    }
    // # Hashtags
    static hashtags(hashtag){
        return {
            helper: 'Hashtags',
            choices: [
                {
                    label: `#${hashtag} (Everything)`,
                    command: `navigate.to('/hashtag/${hashtag}')`,
                    description: 'Go to the hastag\'s page'
                },
                {
                    label: `#${hashtag} (Posts By You)`,
                    command: `navigate.to('/hashtag/${hashtag}?filters_rp_author=%7B%22name%22%3A%22author_me%22%2C%22args%22%3A%22%22%7D&ref=side_filter')`,
                    description: 'Go to the hastag\'s page'
                },
                {
                    label: `#${hashtag} (Posts By Your Friends and Groups)`,
                    command: `navigate.to('/hashtag/${hashtag}?filters_rp_author=%7B%22name%22%3A%22author_friends_groups%22%2C%22args%22%3A%22%22%7D')`,
                    description: 'Go to the hastag\'s page'
                },
                {
                    label: `#${hashtag} (Posts You've Seen)`,
                    command: `navigate.to('/hashtag/${hashtag}?filters_interacted_posts=%7B%22name%22%3A%22interacted_posts%22%2C%22args%22%3A%22%22%7D&ref=side_filter')`,
                    description: 'Go to the hastag\'s page'
                },
                {
                    label: `#${hashtag} (Posts in Your Groups)`,
                    command: `navigate.to('/hashtag/${hashtag}?filters_rp_group=%7B%22name%22%3A%22my_groups_posts%22%2C%22args%22%3A%22%22%7D&ref=side_filter')`,
                    description: 'Go to the hastag\'s page'
                },
            ]
        }
    }
    // $ Search
    static search(search_term){
        let escaped_search_term = escape(search_term);

        return {
            helper: 'Tags',
            choices: [
                {
                    label: 'All results for: '+search_term,
                    command: `navigate.to('/search/str/${escaped_search_term}/keywords_search/')`,
                    description: 'All results matching the search term'
                },
                {
                    label: 'People matching: '+search_term,
                    command: `navigate.to('/search/people/?q=${escaped_search_term}')`,
                    description: 'All people matching the search term'
                },
                {
                    label: 'Photos matching: '+search_term,
                    command: `navigate.to(\'/search/photos/?q=${escaped_search_term}')`,
                    description: 'All photos matching the search term'
                },
                {
                    label: 'Videos matching: '+search_term,
                    command: `navigate.to('/search/videos/?q=${escaped_search_term}')`,
                    description: 'All videos matching the search term'
                },
                {
                    label: 'Pages matching: '+search_term,
                    command: `navigate.to('/search/pages/?q=${escaped_search_term}')`,
                    description: 'All pages matching the search term'
                },
                {
                    label: 'Verified Pages matching: '+search_term,
                    command: `navigate.to('/search/pages/?q=${escaped_search_term}&filters_verified=%7B%22name%22%3A%22pages_verified%22%2C%22args%22%3A%22%22%7D')`,
                    description: ''
                },
                {
                    label: 'Places matching: '+search_term,
                    command: `navigate.to('/search/places/?q=${escaped_search_term}')`,
                    description: 'All places matching the search term'
                },
                {
                    label: 'Groups matching: '+search_term,
                    command: `navigate.to('/search/groups/?q=${escaped_search_term}')`,
                    description: 'All groups matching the search term'
                },
                {
                    label: 'Apps matching: '+search_term,
                    command: `navigate.to('/search/apps/?q=${escaped_search_term}')`,
                    description: 'All apps matching the search term'
                },
                {
                    label: 'Events matching: '+search_term,
                    command: `navigate.to('/search/events/?q=${escaped_search_term}')`,
                    description: 'All events matching the search term'
                },
            ]
        }
    }
    // ? Help
    static get help(){
        return {
            helper: 'HELP IS ON THE WAY!'
        }
    }
}

export { choices };