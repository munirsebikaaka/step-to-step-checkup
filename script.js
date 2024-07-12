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

const btnRunQuote = document.querySelector(".btn-quote");

buttons.addEventListener("click", function () {
  if (firstName.value && lastName.value) {
    // alert(`${firstName.value} ${lastName.value}`);
    try1.textContent = "option1";
    ageSexCell.classList.remove("hidden");
  } else {
    alert("fill inputs");
  }
  if (+birthDates.value && typeOfSEX) {
    // if (Number(birthDates)) {
    //   alert(`${birthDates.value} ${typeOfSEX.value}`);
    try2.textContent = "option2";
    origin.classList.remove("hidden");
    // }
  }
  if (country.value && district.value) {
    // alert(`${country.value} ${district.value}`);
    try3.textContent = "option3";
    quotesCell.classList.remove("hidden");
    platforms.classList.remove("hidden");
  }
});

//LOGIC STRUCTURE OF QUOTES
btnRunQuote.addEventListener("click", function () {
  const string = ["come", "go", "who", "why"];
  small = string[Math.trunc(Math.random() * string.length)];
  document.querySelector(".quote").textContent = small;
});

// const platformsCell = document.querySelector(".platforms-cell");
// platformsCell.addEventListener("click", function (e) {
//   if (e.target.classList.contains("platform")) console.log(e.target);
// });
const x = document.querySelectorAll(".platform");
x.forEach(
  (el) =>
    //   el.addEventListener("click", function () {
    console.log(el)
  //   })
);
