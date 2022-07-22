const btn = document.getElementById("btn")! as HTMLButtonElement; // add "!", guaranteed to not be null
const input = document.getElementById("todoinput")! as HTMLInputElement; // Insist that this element exists
// Need to tell TS that the above element is an HTMLInputElement
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodoText = input.value;
  const newLI = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  newLI.append(newTodoText);
  newLI.append(checkbox);
  list.append(newLI);
  input.value = "";
});

// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
