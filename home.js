// ===== Glass Circle Drag Functionality (Existing) =====
const glassCircle = document.getElementById('glassCircle');
let isDragging = false;
let currentX = 0, currentY = 0, initialX = 0, initialY = 0;
let xOffset = 0, yOffset = 0;

glassCircle.addEventListener('mousedown', dragStart);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', dragEnd);
glassCircle.addEventListener('touchstart', dragStart, { passive: false });
document.addEventListener('touchmove', drag, { passive: false });
document.addEventListener('touchend', dragEnd);

function dragStart(e) {
    if (e.type === 'touchstart') {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
    } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
    }

    if (e.target === glassCircle || glassCircle.contains(e.target)) {
        isDragging = true;
        glassCircle.classList.add('dragging');
    }
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();

        if (e.type === 'touchmove') {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;
        glassCircle.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }
}

function dragEnd() {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    glassCircle.classList.remove('dragging');
}

// ===== Video Control =====
function toggleVideo() {
    const video = document.getElementById('mainVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ===== Initialize on Load =====
window.addEventListener('load', () => {
    // Center glass circle initially
    const centerX = window.innerWidth / 2 - 125;
    const centerY = window.innerHeight / 2 - 125;
    xOffset = centerX;
    yOffset = centerY;
    glassCircle.style.transform = `translate(${centerX}px, ${centerY}px)`;
});