export function initScripts() {
  function openMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
  }

  document.getElementById("menuButton").addEventListener("click", openMenu);
}
