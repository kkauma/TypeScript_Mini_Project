"use strict";
const btn = document.getElementById("btn"); // add "!", guaranteed to not be null
const input = document.getElementById("todoinput"); // Insist that this element exists
// Need to tell TS that the above element is an HTMLInputElement
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submitted!");
});
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
