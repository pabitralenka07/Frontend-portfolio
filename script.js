ScrollReveal().reveal('.hero-left', { origin: 'left', distance: '50px', duration: 1000, delay: 300 });
ScrollReveal().reveal('.hero-right', { origin: 'right', distance: '50px', duration: 1000, delay: 500 });
ScrollReveal().reveal('.navbar', { origin: 'top', distance: '20px', duration: 800, delay: 200 });

ScrollReveal().reveal('.about-img', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});
ScrollReveal().reveal('.about-content', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});


ScrollReveal().reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 300,
});


// One entrance animation: the hero
ScrollReveal().reveal('.hero-text', { origin: 'left', distance: '40px', duration: 900, delay: 150 });
ScrollReveal().reveal('.hero-photo', { origin: 'right', distance: '40px', duration: 900, delay: 300 });

// Close the mobile menu after tapping a link
const toggle = document.getElementById('menu-toggle');
document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => { toggle.checked = false; })
);