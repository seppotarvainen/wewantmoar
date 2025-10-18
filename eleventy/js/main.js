document.addEventListener('DOMContentLoaded', () => {
    const nav    = document.querySelector('.navbar');
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');

    const toggleNav = () => {
        const val = links.classList.toggle('active');
        toggle.setAttribute('aria-expanded', val ? 'true' : 'false');
    }

    const closeNav = () => {
        links.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', toggleNav);

    document.addEventListener('click', e => {
        if (!nav.contains(e.target)) {
            closeNav();
        }
    });

    links.addEventListener('click', (e) => {
        if (e.target.closest('a')) {
            closeNav();
        }
    });

});