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

function tr1() {
  steps.forEach((step, i) => {
    if (i < curValue) {
      if (i === 1 && firstName.value && lastName.value) {
        namesCell.classList.add("hidden");
        origin.classList.remove("hidden");
      } else if (i === 2 && country.value && district.value) {
        origin.classList.add("hidden");
        ageSexCell.classList.remove("hidden");
      } else if (i === 3 && +birthDates.value && typeOfSEX.value) {
        ageSexCell.classList.add("hidden");
        quotesCell.classList.remove("hidden");
      }

      step.classList.add("checked");
      step.textContent = i;
      console.log("yes");
    } else {
      step.classList.remove("checked");
      if (i === 3) {
        quotesCell.classList.add("hidden");
        ageSexCell.classList.remove("hidden");
      } else if (i === 2) {
        ageSexCell.classList.add("hidden");
        origin.classList.remove("hidden");
      } else if (i === 1) {
        origin.classList.add("hidden");
        namesCell.classList.remove("hidden");
      }
    }
  });
}

btnRigth.addEventListener("click", function () {
  curValue++;
  tr1();
});
btnleft.addEventListener("click", function () {
  curValue--;
  tr1();
});

//THE FUNCTIONALLITY OF THE RANDOM QUOTE SELECTOR
function aboutRondomQuote() {
  btnRunQuote.addEventListener("click", function () {
    small = string[Math.trunc(Math.random() * string.length)];
    quotePal.textContent = small;
  });
}
aboutRondomQuote();

function selectedQUOTE() {
  selectorBtn.addEventListener("click", function () {
    document.querySelector(".selected").textContent = quotePal.textContent;
  });
}

selectedQUOTE();

//ADD THE SLIDE FUNCTIONALLITY TO THE SECTION
//Add the transform property to the section
// function addTransformProperty() {
//   steps.forEach(
//     (step, i) => (step.style.transform = `translateX(${i * 100}%)`)
//   );
// }
// addTransformProperty();

// function movingToTheRightPosition() {
//   curValue++;
//   steps.forEach((step, i) => {
//     if (curValue === i) {
//       if (curValue === 1) {
//         if (firstName.value && lastName.value) {
//           ageSexCell.classList.remove("hidden");
//           namesCell.classList.add("hidden");
//           name1.textContent = firstName.value;
//           name2.textContent = lastName.value;
//           step.style.backgroundColor = "yellow";
//         }
//       } else if (curValue === 2) {
//         if (+birthDates.value && typeOfSEX.value) {
//           birthYear.textContent = +birthDates.value;
//           sexType.textContent = typeOfSEX.value;
//           origin.classList.remove("hidden");
//           ageSexCell.classList.add("hidden");
//           step.style.backgroundColor = "blue";
//         }
//       } else if (curValue === 3) {
//         if (country.value && district.value) {
//           step.style.backgroundColor = "green";
//           yourCountry.textContent = country.value;
//           region.textContent = district.value;
//           quotesCell.classList.remove("hidden");
//           origin.classList.add("hidden");
//         }
//       } else if (curValue === 4) {
//         if (
//           document.querySelector(".selected").textContent ===
//           quotePal.textContent
//         )
//           console.log("yes it is");
//         bestQuote.textContent = quotePal.textContent;
//         step.style.backgroundColor = "black";
//         quotesCell.classList.add("hidden");
//         about.classList.remove("hidden");
//       }
//     }
//   });
// }
// function movingToTheLeftPosition() {
//   // curValue--;
//   steps.forEach((step, i) => {
//     if (i === 1) {
//       namesCell.classList.remove("hidden");
//       step.style.backgroundColor = "red";
//       console.log("am present");
//     } else if (i === 2) {
//       ageSexCell.classList.add("hidden");
//     }
//   });
// }

// btnRigth.addEventListener("click", movingToTheRightPosition);
// btnleft.addEventListener("click", movingToTheLeftPosition);

// // function movingToTheLeftPosition() {
// //   btnleft.addEventListener("click", function () {
// //     if (
// //       firstName.value &&
// //       lastName.value &&
// //       origin.classList.contains("hidden") //&&
// //       // ageSexCell.classList.contains("hidden")
// //     ) {
// //       ageSexCell.classList.add("hidden");
// //       appSteps[1].style.backgroundColor = "red";
// //     }
// //   });
// // }

// // function left2() {
// //   btnleft.addEventListener("click", function () {
// //     if (
// //       +birthDates.value &&
// //       typeOfSEX.value &&
// //       quotesCell.classList.contains("hidden") //&&
// //       //!ageSexCell.classList.contains("hidden")
// //     ) {
// //       origin.classList.add("hidden");
// //       appSteps[2].style.backgroundColor = "red";
// //     }
// //   });
// // }

// // function left3() {
// //   btnleft.addEventListener("click", function () {
// //     if (
// //       country.value &&
// //       district.value &&
// //       !origin.classList.contains("hidden")
// //     ) {
// //       appSteps[3].style.backgroundColor = "red";
// //       quotesCell.classList.add("hidden");
//     }
//   });
// }
// appSteps[0].style.backgroundColor = "green";
// const movingToTheRightPosition = () => {
//   if (firstName.value && lastName.value) {
//     appSteps[1].style.backgroundColor = "green";
//     ageSexCell.classList.remove("hidden");
//     movingToTheLeftPosition();
//   } else {
//     alert("fill inputs");
//   }
//   if (+birthDates.value && typeOfSEX) {
//     appSteps[2].style.backgroundColor = "green";
//     origin.classList.remove("hidden");
//     // left2();
//   }
//   if (country.value && district.value) {
//     appSteps[3].style.backgroundColor = "green";
//     quotesCell.classList.remove("hidden");
//     // left3();
//   }
// };
// btnRigth.addEventListener("click", movingToTheRightPosition);
