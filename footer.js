const icons = document.querySelectorAll('.glass-icon');

icons.forEach(icon => {
    icon.addEventListener('click', e => {

        // Active state
        icons.forEach(i => i.classList.remove('active'));
        icon.classList.add('active');

        // Ripple
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = icon.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        icon.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
        setTimeout(() => icon.classList.remove('active'), 1800);
    });
});