/**
 * Targets elements and whenever are clicked, toggles the class 'open' to show/hide the menu.
 */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
