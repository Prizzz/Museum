"use strict";

function burgerMenu() {
  const icon = document.querySelector(".burger-icon");
  const menu = document.querySelector(".burger-menu");

  icon.addEventListener("click", () => {
    icon.classList.toggle("active");
    menu.classList.toggle("active");
    document.querySelector(".welcome-content").classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (e.target.className == "burger-item") {
      icon.classList.remove("active");
      menu.classList.remove("active");
      document.querySelector(".welcome-content").classList.remove("hidden");
    }
  });
}
burgerMenu();
