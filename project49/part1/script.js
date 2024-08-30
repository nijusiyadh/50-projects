const input = document.getElementById("input");
const form = document.getElementById("form");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener("click", (e) => {
      todoEl.classList.toggle("completed");
      updateLs();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLs();
    });

    todosUL.appendChild(todoEl);

    input.value = "";

    updateLs();
  }
}

function updateLs() {
  const todosEl = document.querySelectorAll("li");

  const todos = [];

  todosEl.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
