"use strict";
function redirectBasedOnBrowserLanguage() {
    try {
        const userLanguage = navigator.language || navigator.userLanguage;
        let redirectUrl;

        switch (true) {
            case userLanguage.startsWith('ru'):
                redirectUrl = 'ru.html';
                break;
            case userLanguage.startsWith('fr'):
                redirectUrl = 'fr.html';
                break;
            case userLanguage.startsWith('de'):
                redirectUrl = 'de.html';
                break;
            case userLanguage.startsWith('it'):
                redirectUrl = 'it.html';
                break;
            default:
                redirectUrl = 'en.html';
                break;
        }

        window.location.href = redirectUrl;
    } catch (error) {
        console.error('An error occurred while redirecting:', error);
    }
}

document.addEventListener('DOMContentLoaded', redirectBasedOnBrowserLanguage);
