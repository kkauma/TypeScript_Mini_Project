"use strict";
const btn = document.getElementById("btn"); // add "!", guaranteed to not be null
btn.addEventListener("click", () => {
    alert("CLICKED!");
});
// Type Assertions
let mystery = "Hello, world!";
// Asserting mystery to a string
const numChars = mystery.length;
