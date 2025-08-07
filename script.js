// Toggle navigation menu on small screens
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Handle contact form submission
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. I will get back to you soon.`);
        // Clear form fields after submission
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
}

// Tile detail view handling
document.addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const targetId = tile.getAttribute('data-target');
            showDetail(targetId);
        });
    });
});

function showDetail(id) {
    const allSections = document.querySelectorAll('.detail-section');
    allSections.forEach(sec => sec.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
        // Scroll into view below the sticky menu
        const offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
}
// Auto-scroll to hero heading on subpages for mobile screens
if (window.innerWidth <= 600) {
  document.addEventListener('DOMContentLoaded', () => {
    const internalHero = document.querySelector('.internal-hero');
    if (internalHero) {
      const offsetTop = internalHero.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });
}
