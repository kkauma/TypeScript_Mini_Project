const btn = document.getElementById("btn")! as HTMLButtonElement; // add "!", guaranteed to not be null
const input = document.getElementById("todoinput")! as HTMLInputElement; // Insist that this element exists
// Need to tell TS that the above element is an HTMLInputElement

btn.addEventListener("click", () => {
  alert(input.value);
  input.value = "";
});
