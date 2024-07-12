"use strict";
let p = document.querySelector(".par");
const buttons = document.querySelector(".btn");
let small = "";
//LOGIC STRUCTURE OF QUOTES
const string = ["come", "go", "who", "why"];
buttons.addEventListener("click", function () {
  small = string[Math.trunc(Math.random() * string.length)];
  p.textContent = small;
});
//LOGIC STRUCTURE OF STEPS
