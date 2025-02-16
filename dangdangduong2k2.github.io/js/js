document.addEventListener('DOMContentLoaded', function() {
    // Highlight active menu item based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    function highlightMenu() {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight;
        let documentHeight = document.documentElement.scrollHeight;

        // Kiểm tra nếu đang ở cuối trang
        if (scrollPosition + windowHeight >= documentHeight - 50) {
            // Nếu ở cuối trang, active menu Contact
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#contact') {
                    link.classList.add('active');
                }
            });
            return;
        }

        // Tìm section hiện tại
        let currentSection = null;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150; // Điều chỉnh offset
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = section;
            }
        });

        // Cập nhật trạng thái active
        if (currentSection) {
            const currentId = currentSection.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentId) {
                    link.classList.add('active');
                }
            });
        }
    }

    // Smooth scrolling with better highlight handling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            // Xóa active class từ tất cả links
            navLinks.forEach(link => link.classList.remove('active'));
            // Thêm active class cho link được click
            this.classList.add('active');

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        } else {
            header.style.background = 'transparent';
            header.style.boxShadow = 'none';
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
            contactForm.reset();
        });
    }

    // Highlight menu on scroll
    window.addEventListener('scroll', highlightMenu);
    
    // Highlight menu on page load
    highlightMenu();
}); 