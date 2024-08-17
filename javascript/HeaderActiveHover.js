document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.header_navbar a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

    function removeActiveClass() {
        navLinks.forEach(link => link.classList.remove('active'));
    }

    function setActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        sections.forEach((section, index) => {
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) >= scrollPosition) {
                removeActiveClass();
                navLinks[index].classList.add('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const targetId = link.getAttribute('href').substring(1); 
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', setActiveLink);

    setActiveLink();
});
