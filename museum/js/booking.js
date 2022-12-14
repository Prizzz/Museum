"use strict";

let BASIC_PRICE = 20;
let SENIOR_PRICE = BASIC_PRICE / 2;

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

function ticketsCalc(e = null) {
  if (e) {
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
  }

  const priceValue = BASIC_PRICE * basicAmount + SENIOR_PRICE * seniorAmount;

  priceTotal.textContent = priceValue;
  modalPriceTotal.textContent = priceValue + " ???";
  modalOverviewBasicAmount.textContent = basicAmount;
  modalOverviewSeniorAmount.textContent = seniorAmount;
  modalOverviewBasicPrice.textContent = basicAmount * BASIC_PRICE + " ???";
  modalOverviewSeniorPrice.textContent = seniorAmount * SENIOR_PRICE + " ???";
}

tickets.addEventListener("click", ticketsCalc);
modalEntryInputs.addEventListener("click", ticketsCalc);

const selectType = document.querySelector(".type-select");
const ticketsType = document.querySelector(".tickets-type");
const ticketTypeContainer = document.querySelector(".info-type");

function getCheckedRadioValue(e) {
  const elements = document.getElementsByName("radioInput");

  if (e.target.className === "type-select") {
    const value = selectType.value;
    for (let i = 0; i < elements.length; ++i) {
      if (elements[i].value == value) elements[i].checked = true;
    }
  }

  for (let i = 0; i < elements.length; ++i) {
    if (elements[i].checked) {
      BASIC_PRICE = Number(elements[i].value);
      SENIOR_PRICE = BASIC_PRICE / 2;
      ticketTypeContainer.innerText = elements[i].parentElement.innerText;

      selectType.value = elements[i].value;
    }
  }
  ticketsCalc();

  const amountList = document.querySelector(".amount-list");
  const receiptListBasic = document.querySelector(".receipt-list-type_basic");
  const receiptListSenior = document.querySelector(".receipt-list-type_senior");

  amountList.innerHTML = `<p>Basic 18+ (${BASIC_PRICE} ???)</p> <p>Senior 65+ (${SENIOR_PRICE} ???)</p>`;
  receiptListBasic.textContent = `Basic (${BASIC_PRICE} ???)`;
  receiptListSenior.textContent = `Senior (${SENIOR_PRICE} ???)`;
}

ticketsType.addEventListener("click", getCheckedRadioValue);
selectType.addEventListener("click", getCheckedRadioValue);

function disableCertainDates() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementsByName("date")[0].setAttribute("min", today);
}
disableCertainDates();

const dateInput = document.querySelector(".date-input");
const timeInput = document.querySelector(".time-input");
const dateContainer = document.querySelector(".info-date");
const timeContainer = document.querySelector(".info-time");

function dateInfoUpdate() {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateFromInput = dateInput.valueAsDate;
  const month = monthNames[dateFromInput.getMonth()];
  const day = days[dateFromInput.getDay()];
  const date = dateFromInput.getDate();
  dateContainer.textContent = `${day}, ${month} ${date}`;
}

function timeInfoUpdate() {
  timeContainer.textContent = timeInput.value.replace(":", " : ");
}

dateInput.addEventListener("input", dateInfoUpdate);
timeInput.addEventListener("input", timeInfoUpdate);

const datePlaceholder = document.querySelector(".on-text-date");
const timePlaceholder = document.querySelector(".on-text-time");

dateInput.addEventListener("focus", () => {
  datePlaceholder.style.display = "none";
});

dateInput.addEventListener("focusout", () => {
  datePlaceholder.style.display = "block";
  if (dateInput.value) {
    datePlaceholder.textContent = dateInput.value;
  }
});

timeInput.addEventListener("focus", () => {
  timePlaceholder.style.display = "none";
});

timeInput.addEventListener("focusout", () => {
  timePlaceholder.style.display = "block";
  if (timeInput.value) {
    timePlaceholder.textContent = timeInput.value;
  }
});
