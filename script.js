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

// buttons.addEventListener("click", function () {
//   if (firstName.value && lastName.value) {
//     name1.textContent = `your first name is ${firstName.value}`;
//     name2.textContent = `ur last name is ${lastName.value}`;
//     try1.textContent = "option1";
//     ageSexCell.classList.remove("hidden");
//   } else {
//     alert("fill inputs");
//   }
//   if (+birthDates.value && typeOfSEX) {
//     birthYear.textContent = `u wea born in ${birthDates.value}`;
//     typeOfSEX.textContent = `u a a ${typeOfSEX.value}`;
//     try2.textContent = "option2";
//     origin.classList.remove("hidden");
//   }
//   if (country.value && district.value) {
//     yourCountry.textContent = `u a from ${country.value}`;
//     region.textContent = `ur region is ${district.value}`;
//     try3.textContent = "option3";
//     quotesCell.classList.remove("hidden");
//     about.classList.remove("hidden");
//   }
// });

//LOGIC STRUCTURE OF QUOTES
const string = ["come", "go", "who", "why"];

btnRunQuote.addEventListener("click", function () {
  small = string[Math.trunc(Math.random() * string.length)];
  document.querySelector(".quote").textContent = small;
});

// const platformsCell = document.querySelector(".platforms-cell");
// platformsCell.addEventListener("click", function (e) {
//   if (e.target.classList.contains("platform")) console.log(e.target);
// });
// const x = document.querySelectorAll(".platform");
// x.forEach(
//   (el) =>
//     //   el.addEventListener("click", function () {
//     console.log(el)
//   //   })
// );

const appSteps = document.querySelectorAll(".try-text");
const btnRigth = document.querySelector(".controls-right");
appSteps[0].style.backgroundColor = "green";
const movingToTheRightPosition = () => {
  if (firstName.value && lastName.value) {
    appSteps[1].style.backgroundColor = "green";
    ageSexCell.classList.remove("hidden");
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
