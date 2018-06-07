'use strict';

// All FOS commands
class commands {
    static profile(profile){
        console.log(profile);

        let navigateTo = '';

        switch (profile) {
            case 'me':
                navigateTo = '/profile.php';
                break;
            default:
                navigateTo = '/'+profile;
                break;
        }

        window.location = navigateTo;
    }
}

export { commands };