'use strict';

// All FOS commands
class commands {
    static profile(profile, fos){
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


        fos.hide();
        window.location = navigateTo;
    }
}

export { commands };