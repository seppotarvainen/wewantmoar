document.addEventListener('DOMContentLoaded', () => {

    // Navigation
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('active'));
    }

});