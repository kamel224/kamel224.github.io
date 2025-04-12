/**
 * Accessibility Improvements JavaScript
 * Dynamically adds accessible names and attributes to elements that need them
 */
document.addEventListener('DOMContentLoaded', function() {
    // Fix accordion buttons
    const accordionButtons = document.querySelectorAll('.card-header button.btn-link');
    accordionButtons.forEach(function(button) {
        // Get the button text to use in the aria-label
        const buttonText = button.textContent.trim();
        // Create an accessible name that indicates the state and purpose
        const ariaLabel = 'Expand or collapse: ' + buttonText;
        // Set the aria-label
        button.setAttribute('aria-label', ariaLabel);
    });

    // Improve the hamburger menu button accessibility if it doesn't have a good label
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && (!navbarToggler.getAttribute('aria-label') || navbarToggler.getAttribute('aria-label') === 'Toggle navigation')) {
        navbarToggler.setAttribute('aria-label', 'Expand or collapse navigation menu');
    }

    // Hide decorative icons from screen readers
    const decorativeIcons = document.querySelectorAll('.navbar-toggler-icon, .custom-icon');
    decorativeIcons.forEach(function(icon) {
        icon.setAttribute('aria-hidden', 'true');
    });
    
    // Ensure form submit button has a clear purpose
    const submitButton = document.querySelector('#submit-button');
    if (submitButton) {
        submitButton.setAttribute('aria-label', 'Submit your contact information');
    }
});
