// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');
  
    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  

  // EmailJS: Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Send the form data using EmailJS
  emailjs.sendForm('service_qpm3fhe', 'template_ls5eyos', this)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Message sent successfully!');
       // Optionally reset the form
       document.getElementById('contactForm').reset();
    }, function(error) {
       console.log('FAILED...', error);
       alert('Failed to send message. Please try again later.');
    });
});


// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Select all portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Loop through each item and add click event listener
  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      // Get the URL from the data-url attribute
      const url = item.getAttribute('data-url');
      if (url) {
        // Open the URL in a new tab (use '_self' for same tab)
        window.open(url, '_blank');
      }
    });
  });
});
