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
        const modal = this.closest('.modal');
        modal.classList.remove('show-modal');
        // Dừng video khi modal đóng
        const iframe = modal.querySelector('iframe');
        if (iframe) {
            const src = iframe.src;
            iframe.src = src; // Reset src để dừng video
        }
    });
});

window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show-modal');
        // Dừng video khi modal đóng
        const iframe = e.target.querySelector('iframe');
        if (iframe) {
            const src = iframe.src;
            iframe.src = src; // Reset src để dừng video
        }
    }
});

// Mở và đóng modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-modal');
        document.getElementById(modalId).style.display = "block";
    });
});

// Đóng modal khi nhấn ra ngoài modal
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}