"use strict";

import "./burgerMenu.js";
import "./welcomeSlider.js";
import "./exploreSlider.js";
import "./customVideoPlayer.js";
import "./videoSlider.js";
import "./gallery.js";
import "./booking.js";
import "./map.js";

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
