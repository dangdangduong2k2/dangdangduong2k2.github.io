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
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Nếu scroll position nằm trong khoảng của section
        if (window.scrollY >= (sectionTop - sectionHeight/3)) {
            currentSection = section.getAttribute('id');
        }
    });

    // Xóa active từ tất cả links
    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Thêm event listener cho scroll
window.addEventListener('scroll', highlightActiveSection);

// Set active cho section hiện tại khi load trang
document.addEventListener('DOMContentLoaded', highlightActiveSection);

// Smooth scroll khi click vào nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Xóa active từ tất cả links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Thêm active vào link được click
        this.classList.add('active');
        
        // Scroll đến section
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
}); 