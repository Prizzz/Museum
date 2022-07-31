"use strict";

import "./customVideoPlayer.js";
import "./exploreSlider.js";

/*burger menu*/
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

/*welcome-slider*/
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

/*video progress-bars controls*/
function progressbarControls() {
  const progressBar = document.querySelector(".progressbar");
  const volumeBar = document.querySelector(".volumebar");

  progressBar.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  });

  volumeBar.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`;
  });
}

/*gallery-random*/
function galleryRandom() {
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const imgSource = shuffle([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);
  const galleryColumns = document.querySelectorAll(".gallery-column");
  let elems = "";
  let i = 0;
  let column = 0;

  imgSource.forEach((item) => {
    let img = `<img class="gallery-column-img" src="assets/img/gallery/gallery${item}.webp" alt="gallery${item}">`;
    elems += img;
    i++;
    if (i == 4) {
      galleryColumns[column].innerHTML = elems;
      elems = "";
      i = 0;
      column++;
    }
  });
}

/*modal window*/
function modalWindow() {
  const modal = document.querySelector(".booking"),
    close = document.querySelector(".close"),
    overlay = document.querySelector(".overlay"),
    button = document.querySelector(".buy");

  button.addEventListener("click", () => {
    modal.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  overlay.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

/*map*/
function map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoicHJpenp6IiwiYSI6ImNrdWxnZ2N2OTFtbDMyd215MmN2cmQzOXgifQ.NHtbnICb-QWA8MGN4T48fw";
  const map = new mapboxgl.Map({
    container: "contacts-map",
    style: "mapbox://styles/mapbox/light-v10",
    center: [2.3364, 48.86091],
    zoom: 16,
  });

  map.addControl(new mapboxgl.NavigationControl());

  const marker1 = new mapboxgl.Marker({ color: "black" })
    .setLngLat([2.3364, 48.86091])
    .addTo(map);

  const marker2 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.3333, 48.8602])
    .addTo(map);

  const marker3 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.3397, 48.8607])
    .addTo(map);

  const marker4 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.333, 48.8619])
    .addTo(map);

  const marker5 = new mapboxgl.Marker({ color: "grey" })
    .setLngLat([2.3365, 48.8625])
    .addTo(map);
}

/*gallery-anim*/

function galleryAnim() {
  const animItems = document.querySelectorAll(".gallery-column-img");

  if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animItem = animItems[i],
          animItemHeight = animItem.offsetHeight,
          animItemOffset = offset(animItem).top,
          animStart = 10;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (
          scrollY > animItemOffset - animItemPoint &&
          scrollY < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("_active-anim");
        } else {
          animItem.classList.remove("_active-anim");
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    animOnScroll();
  }
}

/*tickets-calc*/

let basicAmount = document.querySelector(".basic").value,
  seniorAmount = document.querySelector(".senior").value,
  typeContainer = document.querySelector(".tickets-type");

let priceTotal = document.querySelector(".price span");
let price = 20;

priceTotal.textContent = +price * +basicAmount + (+price / 2) * +seniorAmount;
const tickets = document.querySelector(".tickets-amount");

tickets.addEventListener("click", () => {
  basicAmount = document.querySelector(".basic").value;
  seniorAmount = document.querySelector(".senior").value;
  priceTotal.textContent = +price * +basicAmount + (+price / 2) * +seniorAmount;
});

function checkType() {
  getCheckedRadioValue("radioInput");
}

function getCheckedRadioValue(name) {
  let elements = document.getElementsByName(name);

  for (let i = 0; i < elements.length; ++i)
    if (elements[i].checked) price = elements[i].value;

  priceTotal.textContent = +price * +basicAmount + (+price / 2) * +seniorAmount;
}

/*video-slider*/

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
  });

  left.addEventListener("click", () => {
    slide--;
    if (slide < 1) slide = 5;
    video.setAttribute("src", `assets/video/video${slide}.mp4`);
    video.setAttribute("poster", `assets/img/video-posters/poster${slide}.jpg`);
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
  });
}

welcomeSlider();
progressbarControls();
galleryRandom();
galleryAnim();
modalWindow();
burgerMenu();
map();
videoSlider();
