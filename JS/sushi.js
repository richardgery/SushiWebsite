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
