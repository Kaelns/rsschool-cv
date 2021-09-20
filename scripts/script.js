const TABLET_SCREEN_WIDTH = 1024;
const menuBtn = document.querySelector(".burger-btn");
const headerNav = document.querySelector(".header__nav");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("js-hide-nav");
});

const resizeHandler = (event) => {
  if (window.innerWidth <= TABLET_SCREEN_WIDTH) {
    headerNav.classList.add("js-hide-nav");
  }
};

window.addEventListener("resize", resizeHandler);
