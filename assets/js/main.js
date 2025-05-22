/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close'),
      navLinks = document.querySelectorAll('.nav__link'),
      sections = document.querySelectorAll('section');

/*===== MENU SHOW/HIDE =====*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav__link[href*='${sectionId}']`).classList.add('active');
        } else {
            document.querySelector(`.nav__link[href*='${sectionId}']`).classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Smooth scroll khi click vào nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Ensure the page scrolls to the top and highlights the correct section when the page is loaded
window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Scroll to the top
    highlightActiveSection(); // Call this to ensure the correct section is highlighted after removing all active classes
});

// Modal functionality
const modals = document.querySelectorAll('.modal');
const modalLinks = document.querySelectorAll('.project-link');
const closeButtons = document.querySelectorAll('.close');

modalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('show-modal');
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.modal').classList.remove('show-modal');
    });
});

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show-modal');
    }
});

window.slideProjects = function(direction) {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    const card = grid.querySelector('.project-card');
    if (!card) return;
    let gap = 32;
    try {
        const style = window.getComputedStyle(grid);
        gap = parseInt(style.gap) || 32;
    } catch (e) {}
    const gridWidth = grid.offsetWidth;
    const cardWidth = card.offsetWidth + gap;
    const visibleCards = Math.floor(gridWidth / cardWidth) || 1;
    const scrollAmount = cardWidth * visibleCards;
    const maxScroll = grid.scrollWidth - grid.clientWidth;

    if (direction < 0) {
        let newScroll = grid.scrollLeft + direction * scrollAmount;
        if (newScroll < 0) newScroll = 0;
        grid.scrollTo({ left: newScroll, behavior: 'smooth' });
    } else {
        let newScroll = grid.scrollLeft + direction * scrollAmount;
        if (newScroll > maxScroll) newScroll = maxScroll;
        grid.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
}