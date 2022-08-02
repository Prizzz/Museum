"use strict";

const BASIC_PRICE = 20;
const SENIOR_PRICE = 10;

let basicAmount = Number(document.querySelector(".basic").value),
  seniorAmount = Number(document.querySelector(".senior").value),
  typeContainer = document.querySelector(".tickets-type");

const priceTotal = document.querySelector(".price span"),
  modalPriceTotal = document.querySelector(".receipt-total-price"),
  tickets = document.querySelector(".tickets-amount"),
  modalEntryBasicAmount = document.querySelector(".booking-entry_basic"),
  modalEntrySeniorAmount = document.querySelector(".booking-entry_senior"),
  modalOverviewBasicAmount = document.querySelector(".booking-overview_basic"),
  modalOverviewSeniorAmount = document.querySelector(
    ".booking-overview_senior"
  ),
  modalOverviewBasicPrice = document.querySelector(".booking-price_basic"),
  modalOverviewSeniorPrice = document.querySelector(".booking-price_senior"),
  modalEntryInputs = document.querySelector(".amount-inputs");

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
modalWindow();

function ticketsCalc(e) {
  const targetClassName = e.target.className;

  if (targetClassName === "ticket-input") {
    basicAmount = Number(document.querySelector(".basic").value);
    seniorAmount = Number(document.querySelector(".senior").value);
    modalEntryBasicAmount.value = basicAmount;
    modalEntrySeniorAmount.value = seniorAmount;
  } else if (targetClassName === "modal-input") {
    basicAmount = Number(modalEntryBasicAmount.value);
    seniorAmount = Number(modalEntrySeniorAmount.value);
    document.querySelector(".basic").value = basicAmount;
    document.querySelector(".senior").value = seniorAmount;
  }

  const priceValue = BASIC_PRICE * basicAmount + SENIOR_PRICE * seniorAmount;

  priceTotal.textContent = priceValue;
  modalPriceTotal.textContent = priceValue + " €";
  modalOverviewBasicAmount.textContent = basicAmount;
  modalOverviewSeniorAmount.textContent = seniorAmount;
  modalOverviewBasicPrice.textContent = basicAmount * BASIC_PRICE + " €";
  modalOverviewSeniorPrice.textContent = seniorAmount * SENIOR_PRICE + " €";
}

tickets.addEventListener("click", ticketsCalc);
modalEntryInputs.addEventListener("click", ticketsCalc);

function getCheckedRadioValue(name) {
  let elements = document.getElementsByName(name);

  for (let i = 0; i < elements.length; ++i)
    if (elements[i].checked) price = elements[i].value;

  priceTotal.textContent =
    BASIC_PRICE * basicAmount + SENIOR_PRICE * seniorAmount;
}

function checkType() {
  getCheckedRadioValue("radioInput");
}
