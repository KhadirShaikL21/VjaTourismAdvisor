// Toggle Mobile Menu
const navLinks = document.querySelector('.nav-links');
const mobileToggle = document.querySelector('.mobile-toggle');

// Mobile Menu Toggle
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Hero Section (optional)
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the page from reloading
    const inputValue = document.querySelector('input').value;
    alert(`Searching for: ${inputValue}`);
    // Optionally, add logic here to process search data or redirect to another page
});
