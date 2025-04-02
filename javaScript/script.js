// JavaScript to close the hamburger menu when a menu item is clicked
// Ensure the script runs only after the page has fully loaded
window.onload = function () {
  // Loop through all menu items and add a click event listener
  document.querySelectorAll('.menu-item').forEach((item) => {
    item.addEventListener('click', () => {
      // Uncheck the checkbox to close the hamburger menu
      document.getElementById('menu-toggle').checked = false;
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll('.reveal');

  function revealElements() {
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 50) {
        element.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealElements);
  revealElements(); // Initial check in case elements are already in view
});
