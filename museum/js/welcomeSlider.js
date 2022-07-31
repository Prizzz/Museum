"use strict";

function welcomeSlider() {
  const left = document.querySelector(".arrow-left"),
    right = document.querySelector(".arrow-right"),
    container = document.querySelector(".welcome-container"),
    count = document.querySelector(".current-slide"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".slider-dot");

  let welcomeSlide = 1;

  right.addEventListener("click", () => {
    dots[welcomeSlide - 1].classList.remove("current-dot");
    welcomeSlide++;
    if (welcomeSlide > 5) welcomeSlide = 1;
    dots[welcomeSlide - 1].classList.add("current-dot");
    container.style.backgroundImage = `url(assets/img/welcome/${welcomeSlide}.jpg)`;
    count.textContent = `0${welcomeSlide}`;
  });

  left.addEventListener("click", () => {
    dots[welcomeSlide - 1].classList.remove("current-dot");
    welcomeSlide--;
    if (welcomeSlide < 1) welcomeSlide = 5;
    dots[welcomeSlide - 1].classList.add("current-dot");
    container.style.backgroundImage = `url(assets/img/welcome/${welcomeSlide}.jpg)`;
    count.textContent = `0${welcomeSlide}`;
  });

  dotsWrap.addEventListener("click", (e) => {
    let className = e.target.classList;
    if (className.contains("slider-dot")) {
      dots[welcomeSlide - 1].classList.remove("current-dot");
      welcomeSlide = Array.prototype.slice.call(dots).indexOf(e.target) + 1;
      dots[welcomeSlide - 1].classList.add("current-dot");
      container.style.backgroundImage = `url(assets/img/welcome/${welcomeSlide}.jpg)`;
      count.textContent = `0${welcomeSlide}`;
    }
  });
}
welcomeSlider();
