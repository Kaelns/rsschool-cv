const menuBtn = document.querySelector(".burger-btn");
const headerNav = document.querySelector(".header__nav");

document.addEventListener("DOMContentLoaded", () => {
  headerNav.classList.add("js-hide-nav", "js-mobile-nav");
});

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("js-hide-nav");
  menuBtn.classList.toggle("js-open-burger");
});

const closeMenu = (event) => {
  if (event.target.tagName !== "BUTTON") {
    headerNav.classList.add("js-hide-nav");
    menuBtn.classList.remove("js-open-burger");
  }
};

document.addEventListener("click", closeMenu);
