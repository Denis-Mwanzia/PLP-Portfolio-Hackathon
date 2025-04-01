// JavaScript to close the hamburger menu when a menu item is clicked
// Loop through all menu items and add a click event listener
document.querySelectorAll('.menu-item').forEach((item) => {
  item.addEventListener('click', () => {
    // Uncheck the checkbox to close the hamburger menu
    document.getElementById('menu-toggle').checked = false;
  });
});
