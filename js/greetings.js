const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greet = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginBtnClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  storeUserName(loginInput.value);
  greetUser();
}

function greetUser() {
  const user = localStorage.getItem(USERNAME_KEY);
  greet.classList.remove(HIDDEN_CLASSNAME);
  greet.innerText = `Hello ${user}`;
}

function storeUserName(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

if (savedUsername !== null) {
  greetUser();
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnClick);
}
