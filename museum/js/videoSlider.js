"use strict";

$(".playlist").slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $(".video-slider-left"),
  nextArrow: $(".video-slider-right"),
  appendDots: $(".video-slider-dots"),
  dotsClass: "video-slider-dots",
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

function resetVideo() {
  const mainPlayButton = document.querySelector(".main-play");
  const playButton = document.querySelector(".play");
  const progressBar = document.querySelector(".progressbar");

  mainPlayButton.style.display = "block";
  playButton.style.backgroundImage = "url(assets/svg/play.svg)";
  progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #C4C4C4 0%, #C4C4C4 100%)`;
  progressBar.value = 0;
}

function videoSlider() {
  const left = document.querySelector(".video-slider-left"),
    right = document.querySelector(".video-slider-right"),
    video = document.querySelector(".main-video"),
    dotsWrap = document.querySelector(".video-slider-dots"),
    dots = document.querySelectorAll(".video-slider-dots li");

  let slide = 1;

  right.addEventListener("click", () => {
    slide++;
    if (slide > 5) slide = 1;
    video.setAttribute("src", `assets/video/video${slide}.mp4`);
    video.setAttribute("poster", `assets/img/video-posters/poster${slide}.jpg`);
    resetVideo();
  });

  left.addEventListener("click", () => {
    slide--;
    if (slide < 1) slide = 5;
    video.setAttribute("src", `assets/video/video${slide}.mp4`);
    video.setAttribute("poster", `assets/img/video-posters/poster${slide}.jpg`);
    resetVideo();
  });

  dotsWrap.addEventListener("click", (e) => {
    let className = e.target.classList;
    if (className.contains("slick-active")) {
      slide = Array.prototype.slice.call(dots).indexOf(e.target) + 1;
      video.setAttribute("src", `assets/video/video${slide}.mp4`);
      video.setAttribute(
        "poster",
        `assets/img/video-posters/poster${slide}.jpg`
      );
    }
    resetVideo();
  });
}

videoSlider();
