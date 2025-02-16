/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Lấy tất cả các nav links và sections
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

// Hàm để highlight active section
function highlightActiveSection() {
    let scrollPosition = window.scrollY;

    // Kiểm tra từng section
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Trừ đi một khoảng để active sớm hơn
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        // Nếu scroll position nằm trong khoảng của section
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Xóa active từ tất cả links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Thêm active vào link tương ứng
            document.querySelector(`.nav__link[href*="${sectionId}"]`).classList.add('active');
        }
    });
}

// Thêm event listener cho scroll
window.addEventListener('scroll', highlightActiveSection);

// Set active cho section đầu tiên khi load trang
document.addEventListener('DOMContentLoaded', () => {
    highlightActiveSection();
});

// Xử lý click vào nav links
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
}); 