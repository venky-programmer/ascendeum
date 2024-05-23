"use strict";

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const input = document.querySelector(".input");
const sec = document.getElementById("sec");
const redDot = document.querySelector(".redDot");
const click = document.querySelector(".click");
const time = document.querySelector(".time");
const timer = Number(sec.value);

const randonShow = () => {
  const randomX = Math.round(Math.random() * 100);
  const randomY = Math.round(Math.random() * 100);
  console.log(randomX, randomY);
  redDot.style.display = "block";
  redDot.style.position = "absolute";
  redDot.style.top = randomX + "px";
  redDot.style.left = randomY + "px";
};

start.addEventListener("click", function () {
  console.log("Start Clicked!");
  randonShow();
  //   redDot.style.display = "block";
  const timeOut = timer * 1000;
  setInterval(() => {
    console.log(sec.value, "Timer");
    setTimeout(() => {
      console.log("timer");
    }, timeOut);
  }, timeOut);
});

pause.addEventListener("click", function () {
  console.log("Clicked!");
});

reset.addEventListener("click", function () {
  console.log("R Clicked!");
});

redDot.addEventListener("click", function () {
  console.log("Red Clicked!");
  randonShow();
});
