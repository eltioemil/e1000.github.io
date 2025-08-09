document.addEventListener('DOMContentLoaded', function () {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'back-to-top';
    button.setAttribute('aria-label', 'Back to top');
    button.textContent = '↑ Top';

    button.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(button);

    // Show when close to bottom instead of after a fixed scroll amount
    var SHOW_WITHIN_PX_FROM_BOTTOM = 500; // tweak as desired

    var toggle = function () {
        var doc = document.documentElement;
        var distanceFromBottom = doc.scrollHeight - (window.scrollY + window.innerHeight);
        if (distanceFromBottom <= SHOW_WITHIN_PX_FROM_BOTTOM) {
            button.classList.add('show');
        } else {
            button.classList.remove('show');
        }

        // Fixed bottom offset; do not adjust to footer
        button.style.bottom = '16px';
    };

    window.addEventListener('scroll', toggle, { passive: true });
    window.addEventListener('resize', toggle);
    toggle();
});
