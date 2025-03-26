const menuBtn = document.getElementById('menu-btn');
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle menu on click
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Check if menu is open, update icon
    if (navLinks.classList.contains('show')) {
        menuIcon.innerHTML = '&times;'; // X icon when menu is open
    } else {
        menuIcon.innerHTML = '&#9776;'; // Hamburger icon when menu is closed
    }
});