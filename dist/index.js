"use strict";
const todos = [];
const btn = document.getElementById("btn"); // add "!", guaranteed to not be null
const input = document.getElementById("todoinput"); // Insist that this element exists
// Need to tell TS that the above element is an HTMLInputElement
const form = document.querySelector("form");
const list = document.getElementById("todolist");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
});
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
// btn.addEventListener("click", () => {
//   alert(input.value);
//   input.value = "";
// });
