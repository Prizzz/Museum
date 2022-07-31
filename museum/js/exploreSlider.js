"use strict";
/*explore-slider*/
function slide() {
  let slideValue = document.querySelector(".explore-slider").value;
  const imgBefore = document.querySelector(".explore-img_before");

  imgBefore.style.clipPath =
    "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";

  const circle = document.querySelector(".explore-circle");
  const lineBot = document.querySelector(".explore-line-bot");
  const lineTop = document.querySelector(".explore-line-top");

  circle.style.left = `${slideValue}%`;
  lineBot.style.left = `${slideValue}%`;
  lineTop.style.left = `${slideValue}%`;
}

const exploreSlider = document.querySelector(".explore-slider");
exploreSlider.addEventListener("input", slide);
