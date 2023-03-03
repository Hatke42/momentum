const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greet = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginBtnClick(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  storeUserName(username);
  greetUser(username);
}

function greetUser(username) {
  greet.classList.remove(HIDDEN_CLASSNAME);
  greet.innerText = `Hello ${username}`;
}

function storeUserName(username) {
  localStorage.setItem(USERNAME_KEY, username);
}

if (savedUsername !== null) {
  greetUser(savedUsername);
} else {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnClick);
}
