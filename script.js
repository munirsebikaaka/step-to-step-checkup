"use strict";

//MAJOR CELLS OF THE APPLICATION
const namesCell = document.querySelector(".names-cell");
const ageSexCell = document.querySelector(".age-sex-cell");
const origin = document.querySelector(".origin");
const about = document.querySelector(".about");
const contentCellAll = document.querySelectorAll(".content");

//STRUCTURES INPUTS  OF THE APPLICATION
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");

const birthDates = document.getElementById("birth");
const typeOfSEX = document.getElementById("sex");

const country = document.getElementById("coutry");
const district = document.getElementById("district");

let quotesCell = document.querySelector(".par");
const buttons = document.querySelector(".btn");
let small = "";

ageSexCell.classList.add("hidden");
origin.classList.add("hidden");
about.classList.add("hidden");
quotesCell.classList.add("hidden");

//practise functionallity
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const birthYear = document.querySelector(".dateOfBirth");
const sexType = document.querySelector(".sex-type");
const yourCountry = document.querySelector(".country");
const region = document.querySelector(".region");
const bestQuote = document.querySelector(".bestQuote");
const favQoute = document.querySelector(".selected");

const appSteps = document.querySelectorAll(".step-cell");
const steps = document.querySelectorAll(".step");
const appQuotes = document.querySelectorAll(".quotes-content");
const quotePal = document.querySelector(".quote");

const btnRunQuote = document.querySelector(".btn-quote");
const selectorBtn = document.querySelector(".btn-quote2");

const btnRigth = document.querySelector(".controls-right");
const btnleft = document.querySelector(".controls-left");

//LOGIC STRUCTURE OF QUOTES

const string = [
  appQuotes[0].textContent,
  appQuotes[1].textContent,
  appQuotes[2].textContent,
  appQuotes[3].textContent,
  appQuotes[4].textContent,
  appQuotes[5].textContent,
];

let curValue = 1;
btnleft.disabled = true;

function aboutRondomQuote() {
  btnRunQuote.addEventListener("click", function () {
    small = string[Math.trunc(Math.random() * string.length)];
    quotePal.textContent = small;
    bestQuote.textContent = small;
  });
}
aboutRondomQuote();

function cUp(value) {
  contentCellAll.forEach((cel) => {
    if (!cel.textContent && value === 5) {
      document.querySelector(".note-msg").textContent = "some inputs are empty";
    } else {
      about.classList.remove("hidden");
    }
  });
}

const getCurentValue = function (index, value, step) {
  if (index < value) {
    cUp(value);
    if (index === 1 && firstName.value && lastName.value && value === 2) {
      step.classList.add("worked-on");
      step.innerHTML = `<ion-icon class="check-maker" name="checkmark-outline"></ion-icon>
      <p class="lev">${index === 0 ? "start" : `level ${index}`}</p>`;
      namesCell.classList.add("hidden");
      origin.classList.remove("hidden");
      name1.textContent = `Your first name is ${firstName.value}`;
      name2.textContent = `Your last name is ${lastName.value}`;
    }

    if (
      index === 2
      //&& country.value && district.value
    ) {
      if (!country.value && district.value) {
        alert("wrong");
      }
      step.innerHTML = `<ion-icon class="check-maker" name="checkmark-outline"></ion-icon>
      <p class="lev">${
        index === 0
          ? "start"
          : `level ${index}

        `
      } </p>

      `;
      step.classList.add("worked-on");
      origin.classList.add("hidden");

      yourCountry.textContent = `Your country is ${country.value}`;
      region.textContent = `Your region is ${district.value}`;
      // if (!yourCountry.textContent && region.textContent) {
      //   alert("please fill in the inputs.");
      // } else {
      //   ageSexCell.classList.remove("hidden");
      // }
      if (!yourCountry.textContent && region.textContent) {
        alert("please fill in the inputs.");
      }
      ageSexCell.classList.remove("hidden");
    }

    if (index === 3 && +birthDates.value && typeOfSEX.value) {
      step.classList.add("worked-on");
      step.innerHTML = `<ion-icon class="check-maker" name="checkmark-outline"></ion-icon><p class="lev">${
        index === 0 ? "start" : `level ${index}`
      }</p>`;
      // if (!yourCountry.textContent && region.textContent) {
      //   alert("please fill in the inputs.");
      // }
      ageSexCell.classList.add("hidden");
      quotesCell.classList.remove("hidden");

      birthYear.textContent = `You where born on ${birthDates.value}`;
      sexType.textContent = `Your sex type is ${typeOfSEX.value}`;
    }

    if (index === 4) {
      step.classList.add("worked-on");
      about.classList.remove("hidden");
      step.innerHTML = `<p>finished<p><class="lev">finished<class=>`;
    }
  } else {
    step.classList.remove("worked-on");
    step.innerHTML = `<ion-icon class="check-maker" name="close-outline"></ion-icon>`;
    if (index === 3) {
      quotesCell.classList.add("hidden");
    } else if (index === 2) {
      ageSexCell.classList.add("hidden");
    } else if (index === 1) {
      origin.classList.add("hidden");
    } else if (index === 0) {
      namesCell.classList.remove("hidden");
    }
  }
};

const deActivateBTNAndActivateBTN = function (value) {
  if (value < 2) {
    btnleft.disabled = true;
  } else {
    btnleft.disabled = false;
  }
  if (value === steps.length) {
    btnRigth.disabled = true;
  } else {
    btnRigth.disabled = false;
  }
};

function runCurValueFunctionallity() {
  steps.forEach((step, i) => {
    getCurentValue(i, curValue, step);
  });
  deActivateBTNAndActivateBTN(curValue);
}

btnRigth.addEventListener("click", () => {
  if (firstName.value && lastName.value) {
    curValue++;
  } else {
    alert("Please fill in the inputs!!!!");
  }

  runCurValueFunctionallity();
});
btnleft.addEventListener("click", () => {
  curValue--;
  runCurValueFunctionallity();
});

//THE FUNCTIONALLITY OF THE RANDOM QUOTE SELECTOR
