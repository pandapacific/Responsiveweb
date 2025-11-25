// interactivity for main page
const mobileNav = document.querySelector('.mobile-nav');

document.body.addEventListener('click', (e) => {
    if (e.target.closest('.nav-menu-icon')) {
        if (mobileNav.classList.contains('hidden')) {
            mobileNav.classList.replace('hidden', 'visible');
            document.body.style.overflow = 'hidden';
        } else {
            mobileNav.classList.replace('visible', 'hidden');
            document.body.style.overflow = 'auto';
        }
    }
    if (e.target.closest("[data-scroll]")) {
        mobileNav.classList.replace('visible', 'hidden');
        document.body.style.overflow = 'auto';
        const target = e.target.closest("[data-scroll]");
        const sectionId = target.getAttribute("data-scroll");
        const section = document.getElementById(sectionId);
        if (!section) return;
        section.scrollIntoView({ behavior: "smooth" });
    }
})