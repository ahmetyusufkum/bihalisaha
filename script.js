// AOS (Animate On Scroll) başlatma
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll efekti
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scroll için tüm linkleri seç
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form gönderimi
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Form verilerini al
        const formData = new FormData(this);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Burada form verilerini işleyebilir veya API'ye gönderebilirsiniz
        console.log('Form verileri:', formObject);

        // Başarılı gönderim mesajı
        alert('Mesajınız başarıyla gönderildi!');
        this.reset();
    });
}

// Mobil menü için hamburger menü
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // Hamburger menü butonu oluştur
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';

    // Mobil menü için stil ekle
    const style = document.createElement('style');
    style.textContent = `
        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 10px;
        }
        
        .hamburger span {
            width: 25px;
            height: 3px;
            background-color: var(--dark-color);
            margin: 2px 0;
            transition: var(--transition);
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            
            .nav-links {
                position: fixed;
                top: 70px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 70px);
                background: white;
                flex-direction: column;
                align-items: center;
                padding: 2rem;
                transition: var(--transition);
            }
            
            .nav-links.active {
                left: 0;
            }
            
            .nav-links a {
                margin: 1rem 0;
            }
        }
    `;

    document.head.appendChild(style);
    navbar.insertBefore(hamburger, navLinks);

    // Hamburger menü tıklama olayı
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
};

// Sayfa yüklendiğinde mobil menüyü oluştur
document.addEventListener('DOMContentLoaded', createMobileMenu);

// Sayfa yüklendiğinde animasyonlu giriş efekti
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
}); 