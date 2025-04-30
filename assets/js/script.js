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

// Adjust background audio volume to 30%
const audio = document.getElementById("bg-audio");
audio.volume = 0.3; // Sets volume to 30%

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`);
})

