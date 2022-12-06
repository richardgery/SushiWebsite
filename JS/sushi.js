// Show menu

const navMenu = document.getElementById("nav_menu"),
  navToogle = document.getElementById("nav_toogle"),
  navClose = document.getElementById("nav_close");

//  Menu show

if (navToogle) {
  navToogle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu hidden

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu mobile

const navLink = document.querySelectorAll(".nav-link");

const listAction = () => {
  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", listAction));

// change background header

const scrollHeader = () => {
  const head = document.getElementById("head");
  this.scrollY >= 50
    ? head.classList.add("bg-header")
    : head.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
