// Dark Mode Toggle Function
function toggleTheme() {
    const body = document.body;
    const themeSlider = document.getElementById('themeSlider');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeSlider.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeSlider.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    }
}

// Hamburger Menu Toggle Function
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('show');
    menuOverlay.classList.toggle('show');

    if (mobileMenu.classList.contains('show')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close Menu Function
function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    hamburger.classList.remove('active');
    mobileMenu.classList.remove('show');
    menuOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Check for saved theme preference on page load
window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const themeSlider = document.getElementById('themeSlider');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeSlider.innerHTML = '<i class="fas fa-moon"></i>';
    }
});
const logoText = document.querySelector('.logo-text');
const logoImg = document.querySelector('.brand-logo img');

logoText.addEventListener('animationend', () => {
    logoImg.style.opacity = 1; // يظهر الشعار بعد اختفاء الكلمة
});