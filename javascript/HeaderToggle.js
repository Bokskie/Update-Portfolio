document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header-toggle');
    const navbar = document.querySelector('.header_navbar');

    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});
