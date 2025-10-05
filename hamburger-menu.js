document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-toggle');
  const hamburgerMenu = document.getElementById('hamburger-menu');

  hamburgerBtn.addEventListener('click', () => {
    if (hamburgerMenu.classList.contains('show')) {
      hamburgerMenu.classList.remove('show');
      setTimeout(() => {
        hamburgerMenu.style.display = 'none';
      }, 300); // Match transition duration
    } else {
      hamburgerMenu.style.display = 'block';
      setTimeout(() => {
        hamburgerMenu.classList.add('show');
      }, 10); // Small delay to trigger animation
    }
  });

  // Optional: Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      hamburgerMenu.classList.remove('show');
      setTimeout(() => {
        hamburgerMenu.style.display = 'none';
      }, 300);
    }
  });
});
