const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let alltodos = [];
const ALLTODOS_KEY = "alltodos";

function saveTodo() {
  localStorage.setItem(ALLTODOS_KEY, JSON.stringify(alltodos));
}

function deleteTodos(event) {
  const deleteli = event.target.parentNode;
  console.log(alltodos);
  alltodos = alltodos.filter((item) => item.id !== parseInt(deleteli.id));
  saveTodo();
  deleteli.remove();
}

function paintTodo(todo) {
  const list = document.createElement("li");
  list.id = todo.id;
  const span = document.createElement("span");
  span.innerText = todo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  list.appendChild(span);
  list.appendChild(button);
  todoList.appendChild(list);

  button.addEventListener("click", deleteTodos);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    id: Date.now(),
    text: todo,
  };
  alltodos.push(todoObj);
  paintTodo(todoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleFormSubmit);

const savedTodos = localStorage.getItem(ALLTODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  alltodos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
