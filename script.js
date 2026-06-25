const body = document.body;
const menuToggle = document.querySelector("[data-menu-toggle]");
const menuLayer = document.querySelector("[data-menu-layer]");
const modeToggle = document.querySelector("[data-mode-toggle]");
const menuLinks = document.querySelectorAll(".menu-layer a");

function setMenu(open) {
  menuLayer.classList.toggle("open", open);
  menuLayer.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "Close" : "Menu";
}

menuToggle.addEventListener("click", () => {
  setMenu(!menuLayer.classList.contains("open"));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  modeToggle.textContent = body.classList.contains("dark") ? "Light" : "Dark";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});
