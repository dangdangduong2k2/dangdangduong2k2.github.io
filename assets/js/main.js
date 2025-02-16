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

// Ensure no section is highlighted when the page is loaded and scrolled to the top
window.addEventListener('load', () => {
    navLinks.forEach(link => link.classList.remove('active'));
    showLanguageNotice(); // Show language selection notice
});

/*==================== LANGUAGE SELECTION NOTICE ====================*/
function showLanguageNotice() {
    const notice = document.createElement('div');
    notice.id = 'language-notice';
    notice.innerHTML = `
        <div class="notice-content">
            <p>Please select your language:</p>
            <button id="lang-en">English</button>
            <button id="lang-vi">Tiếng Việt</button>
        </div>
    `;
    document.body.appendChild(notice);

    document.getElementById('lang-en').addEventListener('click', () => {
        notice.style.display = 'none';
        // Add logic to switch to English
    });

    document.getElementById('lang-vi').addEventListener('click', () => {
        notice.style.display = 'none';
        // Add logic to switch to Vietnamese
    });
}