# Facebook On Steroids

I love how [Reddit Enhancement Suite](https://github.com/honestbleeps/Reddit-Enhancement-Suite) bring a whole new level of customizability, flexibility and shortcuts to Reddit. I haven't been able to find anything like that for Facebook, so this is my attempt to do something similar for facebook. 
For now it's Chrome extension, I might do a Firefox port in the future if the project goes as expected.

## Table of Contents
- [Installation](#installation)
- [Features](#features)
- [Keybindings](#keybindings)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Credits](#credits)
- [Licence](#licence)

## Installation
For now you'll need to load the unpacked extension, at some point I'll release the .crx and publish it on the Chrome Web Store.
1. Clone the repo `git clone https://github.com/d3vr/facebook-on-steroids.git`
2. Go to your **extension's page** (`chrome://extensions`) and enable *developer mode*.
3. Click on `Load unpacked` button and pick the `chrome` folder from the cloned repo.

## Features

### Commands Bar (CMDBar)
The Commands Bar, CMDBar for short, is a quick way to access different parts of facebook, navigate to pages/groups/friends, execute FOS commands and more.

The CMDBar uses a mode system to access different functionalities. Each mode has a symbol assigned to it, to access one mode: the first character you type into the CMDBar is the **character assigned to that mode**.

**Modes**:

| Trigger character  | Name | Description |
| ------------- | ------------- | ------------- |
| `` ` `` (back tick) | Navigation | Shortcuts to different pages and parts on facebook |
| `!`  | Command | List of FOS commands |
| `@`  | Profile | List of all of your friends |
| `#`  | Hashtag | Search for posts using a given hashtag |
| `$`  | Search | Shortcut to facebook's search |
| `?`  | Help | Show CMDBar help |


### Custom Newsfeeds: `TODO`
### Posts classifier: `TODO`
### Newsfeed filters: `TODO`
### Vim-like navigation: `TODO`

## Keybindings
**Contexts**:
- `NAI` -  Not An Input: Works when no input is focused
- `EVR` -  Everywhere: Works everywhere, even in inputs
- `CMD` -  Works while CMDBar is open

| Key(s)  | Function | Context
| ------------- | ------------- | ------------- |
| `. (dot)`  |  Open the CMDBar (No mode) | NAI |
| `Alt + . (dot)`  |  Open the CMDBar (No mode) | EVR |
| `` ` `` or `²` |  Open CMDBar in Navigation mode | NAI |
| `!` or `1`  |  Open CMDBar in Command mode | NAI |
| `@` or `2` |  Open CMDBar in Profile mode | NAI |
| `#` or `3` |  Open CMDBar in Hashtag mode | NAI |
| `$` or `4` |  Open CMDBar in Search mode | NAI |
| ``Alt + (`/!/@/#/$)``  |  Open CMDBar in given mode | EVR |
| `Alt+K` / `Alt+J` or  `Up` / `Down`  | Cycle through choices in the CMDBar | CMD |
| `Esc`  | Close the CMDBar | CMD |
| `Alt+K` / `Alt+J`  | Scroll Up Down | NAI |
| `/`  | Focus the facebook search box | NAI |

## Roadmap
- [ ] Commands bar
    - [ ] List friends, pages, groups and navigate to them
    - [ ] Access different pages (settings, privacy, messages, ..etc) quickly
    - [ ] Access custom shortcuts
- [ ] Custom shortcuts (key combinations) to groups, pages, profiles or anywhere on facebook.
- [ ] Vim-style keyboard navigation
- [ ] News feed filters
- [ ] News feed post classifier
- [ ] Custom news feeds: pick a number of groups, pages, friends. Display the latest posts from the picked places.

## Contributing
TODO

## Credits
- [Fuse.js](https://github.com/krisk/fuse): used for filtering CMDBar choices

## Licence
This project is licensed under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).
