import * as _gallery from "./gallery.js";

let navHidden = true;
const elNav = document.getElementById("navigation");
const elHamburgerNav = document.getElementById("hamburgerNav");
const toggleNabBtnEl = document.querySelectorAll(".toggle-nav-btn");
const elLogo = document.getElementById("logo");
const links = document.querySelectorAll(".nav-link");
const menuIcon = document.getElementById("menu-icon");

const makeNavTransparent = () => {
  elNav.style.backgroundColor = "transparent";
  elLogo.style.color = "white";
  links.forEach((link) => {
    link.classList.remove("nav-link-dark");
    link.classList.add("nav-link");
  });
  menuIcon.src = "./assets/icons/menu.svg";
};

const makeNavWhite = () => {
  elNav.style.backgroundColor = "white";
  elLogo.style.color = "black";
  links.forEach((link) => {
    link.classList.remove("nav-link");
    link.classList.add("nav-link-dark");
  });
  menuIcon.src = "./assets/icons/menu-dark.svg";
};

const toggleNav = () => {
  if (navHidden) {
    navHidden = false;
    elNav.classList.add("h-screen");
    elHamburgerNav.classList.remove("-top-[500px]");
    elHamburgerNav.classList.add("top-0");
    makeNavWhite();
  } else {
    elNav.classList.remove("h-screen");
    elHamburgerNav.classList.remove("top-0");
    elHamburgerNav.classList.add("-top-[500px]");
    navHidden = true;
    const show = window.scrollY > 40;
    if (show) {
      makeNavWhite();
    } else {
      makeNavTransparent();
    }
  }
};

function handleScroll() {
  const show = window.scrollY > 40;

  if (show) {
    makeNavWhite();
  } else {
    if (navHidden) {
      makeNavTransparent();
    }
  }
}

toggleNabBtnEl.forEach((el) => {
  el.addEventListener("click", toggleNav);
});
document.addEventListener("scroll", handleScroll);

window.addEventListener("DOMContentLoaded", function () {
  // Hide the loading message and show the content
  const loadingElement = document.getElementById("loading");
  loadingElement.classList.add("hidden");
});
