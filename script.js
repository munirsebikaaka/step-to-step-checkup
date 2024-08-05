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
btnleft.style.backgroundColor = "grey";

function aboutRondomQuote() {
  btnRunQuote.addEventListener("click", function () {
    if (
      country.value &&
      district.value &&
      +birthDates.value &&
      typeOfSEX.value
    ) {
      small = string[Math.trunc(Math.random() * string.length)];
      quotePal.textContent = small;
      bestQuote.textContent = small;
    } else {
      alert(
        "YOU HAVE TO FIRST  FILL IN ALL THE GIVEN INPUTS FOR A CLEAR OUT COME OF YOUR DETAILS!!!!"
      );
    }
  });
}
aboutRondomQuote();

function simplyfyStepsMoVEMENTFunctionallity(
  step,
  index,
  cellToAdd,
  cellToRemove
) {
  step.classList.add("worked-on");
  step.innerHTML = `<ion-icon class="check-maker corect" name="checkmark-outline"></ion-icon>
      <p class="lev">${index === 0 ? "start" : `step ${index}`}</p>`;
  cellToAdd.classList.add("hidden");
  cellToRemove.classList.remove("hidden");
}

function elseSideOfTheFunctionallity(
  step,
  index,
  quoteC1,
  quoteC2,
  quoteC3,
  quoteC4
) {
  step.classList.remove("worked-on");
  step.innerHTML = `<ion-icon class="check-maker" name="close-outline"></ion-icon>`;
  if (index === 3) {
    quoteC1.classList.add("hidden");
  } else if (index === 2) {
    quoteC2.classList.add("hidden");
  } else if (index === 1) {
    quoteC3.classList.add("hidden");
  } else if (index === 0) {
    quoteC4.classList.remove("hidden");
  }
}

const getCurentValue = function (index, value, step) {
  if (index < value) {
    if (index === 1) {
      simplyfyStepsMoVEMENTFunctionallity(step, index, namesCell, origin);
      name1.textContent = `Your first name is ${firstName.value}`;
      name2.textContent = `Your last name is ${lastName.value}`;
    }
    if (index === 2) {
      simplyfyStepsMoVEMENTFunctionallity(step, index, origin, ageSexCell);
      yourCountry.textContent = `Your country is ${country.value}`;
      region.textContent = `Your region is ${district.value}`;
    }
    if (index === 3) {
      simplyfyStepsMoVEMENTFunctionallity(step, index, ageSexCell, quotesCell);
      birthYear.textContent = `You where born in ${birthDates.value}`;
      sexType.textContent = `Your sex type is ${typeOfSEX.value}`;
    }

    if (index === 4) {
      step.classList.add("worked-on");
      about.classList.remove("hidden");
      quotesCell.classList.add("hidden");
      step.innerHTML = `<p class="last">finish<p>
      <p class="lev">finished<p>`;
    }
  } else {
    elseSideOfTheFunctionallity(
      step,
      index,
      quotesCell,
      ageSexCell,
      origin,
      namesCell
    );
  }
};

const deActivateBTNAndActivateBTN = function (value) {
  if (value < 2) {
    btnleft.disabled = true;
    btnleft.style.backgroundColor = "grey";
  } else {
    btnleft.disabled = false;
    btnleft.style.backgroundColor = "inherit";
  }
  if (value === steps.length) {
    btnRigth.disabled = true;
    btnRigth.style.backgroundColor = "grey";
  } else {
    btnRigth.disabled = false;
    btnRigth.style.backgroundColor = "inherit";
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
