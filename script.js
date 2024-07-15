"use strict";

//MAJOR CELLS OF THE APPLICATION
const namesCell = document.querySelector(".names-cell");
const ageSexCell = document.querySelector(".age-sex-cell");
const origin = document.querySelector(".origin");
const platforms = document.querySelector(".platforms-cell");
const about = document.querySelector(".about");

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
// platforms.classList.add("hidden");
about.classList.add("hidden");
quotesCell.classList.add("hidden");

//practise functionallity
const try1 = document.querySelector(".try-text");
const try2 = document.querySelector(".try-text1");
const try3 = document.querySelector(".try-text2");

const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const birthYear = document.querySelector(".dateOfBirth");
const sexType = document.querySelector(".sex-type");
const yourCountry = document.querySelector(".country");
const region = document.querySelector(".region");
const bestQuote = document.querySelector(".bestQuote");
const socialPlatform = document.querySelector("social-platform");

const btnRunQuote = document.querySelector(".btn-quote");

//LOGIC STRUCTURE OF QUOTES
const appQuotes = document.querySelectorAll(".quotes-content");
const quotePal = document.querySelector(".quote");

const string = [
  appQuotes[0].textContent,
  appQuotes[1].textContent,
  appQuotes[2].textContent,
  appQuotes[3].textContent,
  appQuotes[4].textContent,
  appQuotes[5].textContent,
];

const appSteps = document.querySelectorAll(".try-text");
const btnRigth = document.querySelector(".controls-right");
const btnleft = document.querySelector(".controls-left");
function movingToTheLeftPosition() {
  btnleft.addEventListener("click", function () {
    ageSexCell.classList.toggle("hidden");
    appSteps[1].style.backgroundColor = "red";
    origin.classList.toggle("hidden");
  });
}
appSteps[0].style.backgroundColor = "green";
const movingToTheRightPosition = () => {
  if (firstName.value && lastName.value) {
    appSteps[1].style.backgroundColor = "green";
    ageSexCell.classList.remove("hidden");
    movingToTheLeftPosition();
  } else {
    alert("fill inputs");
  }
  if (+birthDates.value && typeOfSEX) {
    appSteps[2].style.backgroundColor = "green";
    origin.classList.remove("hidden");
  }
  if (country.value && district.value) {
    appSteps[3].style.backgroundColor = "green";
    quotesCell.classList.remove("hidden");
    about.classList.remove("hidden");
  }
};
btnRigth.addEventListener("click", movingToTheRightPosition);

btnRunQuote.addEventListener("click", function () {
  small = string[Math.trunc(Math.random() * string.length)];
  quotePal.textContent = small;
});
document.querySelector(".btn-quote2").addEventListener("click", function () {
  appSteps[4].style.backgroundColor = "green";
  document.querySelector(".selected").textContent = quotePal.textContent;
  platforms.classList.remove("hidden");
});
