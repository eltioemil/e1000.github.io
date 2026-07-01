// Language detection and preference storage (mirrors the theme-toggle cookie approach)
(function () {
    'use strict';

    const COOKIE_NAME = 'lang-preference';
    const COOKIE_EXPIRY_DAYS = 365;

    const COUNTERPART_MAP = {
        '/': '/es/',
        '/cv/': '/es/cv/',
        '/about/': '/es/about/',
        '/projects/': '/es/projects/',
        '/contact/': '/es/contact/',
        '/cookies/': '/es/cookies/',
        '/es/': '/',
        '/es/cv/': '/cv/',
        '/es/about/': '/about/',
        '/es/projects/': '/projects/',
        '/es/contact/': '/contact/',
        '/es/cookies/': '/cookies/',
    };

    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
        }
        return null;
    }

    function getPageLang() {
        const path = window.location.pathname;
        return (path === '/es/' || path === '/es' || path.startsWith('/es/')) ? 'es' : 'en';
    }

    function getPreferredLang() {
        const stored = getCookie(COOKIE_NAME);
        if (stored) return stored;
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        return browserLang.startsWith('es') ? 'es' : 'en';
    }

    function maybeRedirect() {
        const pageLang = getPageLang();
        const preferred = getPreferredLang();

        if (!getCookie(COOKIE_NAME)) {
            setCookie(COOKIE_NAME, preferred, COOKIE_EXPIRY_DAYS);
        }

        if (preferred !== pageLang) {
            const path = window.location.pathname;
            const counterpart = COUNTERPART_MAP[path];
            if (counterpart) {
                window.location.replace(counterpart);
            }
        }
    }

    function initLangSwitcher() {
        document.querySelectorAll('[data-lang-switch]').forEach(function (link) {
            link.addEventListener('click', function () {
                setCookie(COOKIE_NAME, this.getAttribute('data-lang-switch'), COOKIE_EXPIRY_DAYS);
            });
        });
    }

    function init() {
        maybeRedirect();
        initLangSwitcher();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
