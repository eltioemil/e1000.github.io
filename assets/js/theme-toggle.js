// Dark mode toggle with cookie storage
(function () {
    'use strict';

    const COOKIE_NAME = 'theme-preference';
    const COOKIE_EXPIRY_DAYS = 365;

    // Cookie utility functions
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Theme management
    function getStoredTheme() {
        return getCookie(COOKIE_NAME) || 'auto';
    }

    function setStoredTheme(theme) {
        setCookie(COOKIE_NAME, theme, COOKIE_EXPIRY_DAYS);
    }

    function applyTheme(theme) {
        document.body.setAttribute('a', theme);
    }

    function getNextTheme(currentTheme) {
        const themes = ['auto', 'light', 'dark'];
        const currentIndex = themes.indexOf(currentTheme);
        return themes[(currentIndex + 1) % themes.length];
    }

    function getThemeIcon(theme) {
        switch (theme) {
            case 'light': return '☀';
            case 'dark': return '☾';
            case 'auto':
            default: return '◑';
        }
    }

    function getThemeLabel(theme) {
        switch (theme) {
            case 'light': return 'Light mode';
            case 'dark': return 'Dark mode';
            case 'auto':
            default: return 'Auto mode';
        }
    }

    // Initialize theme on page load
    function initTheme() {
        const storedTheme = getStoredTheme();
        applyTheme(storedTheme);

        // Show cookie notice if cookies haven't been acknowledged
        if (!getCookie('cookies-acknowledged')) {
            showCookieNotice();
        }

        return storedTheme;
    }

    // Cookie notice functionality
    function showCookieNotice() {
        const notice = document.getElementById('cookie-notice');
        if (notice) {
            // Force display on main container
            notice.style.setProperty('display', 'block', 'important');

            // Force display on content container
            const content = notice.querySelector('.cookie-notice-content');
            if (content) {
                content.style.setProperty('display', 'flex', 'important');
                content.style.setProperty('visibility', 'visible', 'important');
                content.style.setProperty('opacity', '1', 'important');
            }

            // Force display on text element
            const text = notice.querySelector('.cookie-notice-text');
            if (text) {
                text.style.setProperty('display', 'block', 'important');
                text.style.setProperty('visibility', 'visible', 'important');
                text.style.setProperty('opacity', '1', 'important');
                text.style.setProperty('color', 'black', 'important');
                text.style.setProperty('font-size', '16px', 'important');
            }

            // Force display on button
            const button = notice.querySelector('#cookie-accept');
            if (button) {
                button.style.setProperty('display', 'inline-block', 'important');
                button.style.setProperty('visibility', 'visible', 'important');
                button.style.setProperty('opacity', '1', 'important');
            }
        }
    }

    function hideCookieNotice() {
        const notice = document.getElementById('cookie-notice');
        if (notice) {
            notice.style.display = 'none';
        }
        setCookie('cookies-acknowledged', 'true', COOKIE_EXPIRY_DAYS);
    }

    // Theme toggle functionality
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('a') || 'auto';
        const nextTheme = getNextTheme(currentTheme);

        // Check if cookie notice is currently visible
        const notice = document.getElementById('cookie-notice');
        const isNoticeVisible = notice && notice.style.display === 'block';

        applyTheme(nextTheme);
        setStoredTheme(nextTheme);
        updateToggleButton(nextTheme);

        // Restore cookie notice visibility if it was visible or should be shown
        if (isNoticeVisible || !getCookie('cookies-acknowledged')) {
            setTimeout(() => {
                showCookieNotice();
            }, 50);
        }
    }

    function updateToggleButton(theme) {
        const button = document.getElementById('theme-toggle');
        if (button) {
            const icon = button.querySelector('.theme-icon');
            const label = button.querySelector('.theme-label');

            if (icon) icon.textContent = getThemeIcon(theme);
            if (label) label.textContent = getThemeLabel(theme);

            button.setAttribute('aria-label', `Switch to ${getThemeLabel(getNextTheme(theme))}`);
            button.title = `Switch to ${getThemeLabel(getNextTheme(theme))}`;
        }
    }

    // Initialize when DOM is ready
    function init() {
        // Wait a bit to ensure all elements are fully rendered
        setTimeout(() => {
            const currentTheme = initTheme();

            // Set up theme toggle button
            const toggleButton = document.getElementById('theme-toggle');
            if (toggleButton) {
                toggleButton.addEventListener('click', toggleTheme);
                updateToggleButton(currentTheme);
            }

            // Set up cookie notice button
            const cookieButton = document.getElementById('cookie-accept');
            if (cookieButton) {
                cookieButton.addEventListener('click', hideCookieNotice);
            }

            // Force check for cookie notice display
            if (!getCookie(COOKIE_NAME) && !getCookie('cookies-acknowledged')) {
                // Add a small delay to ensure CSS is fully loaded
                setTimeout(showCookieNotice, 100);
            }
        }, 50);
    }

    // Run initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
