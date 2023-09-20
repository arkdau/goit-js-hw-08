import { default as localStorage } from "./storage";
// Requiring lodash library
const _throttle = require("lodash.throttle");

const textInput = document.querySelector(".feedback-form input");
const textAreaInput = document.querySelector(".feedback-form textarea");
const msgForm = document.querySelector(".feedback-form");

let msg = {
  email: "",
  message: "",
};

function hasStorageItem(storageItem) {
  let msgTmp = localStorage.load(storageItem);

  if (msgTmp != undefined) {
    msg = msgTmp;
    return true;
  }
  return false;
}

if (hasStorageItem("feedback-form-state") === true) {
  textInput.value = msg.email;
  textAreaInput.value = msg.message;
}

msgForm.addEventListener(
  "input",
  _throttle(() => {
      msg.email = textInput.value;
      msg.message = textAreaInput.value;
      localStorage.save("feedback-form-state", msg);
      console.log(msg);
  }, 500),
);

msgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  msg.email = form.elements.email.value;
  msg.message = form.elements.message.value;
  localStorage.save("feedback-form-state", msg);

  if (msg.email === '') {
    alert('email adres - puste pole.\nUzupełnij brakujące dane.');
  }else if (msg.message === '') {
    alert('Message - puste pole.\nUzupełnij brakujące dane.');
  }else {
    console.log('cache: feedback-form-state = ', msg);
    console.log('localStorage: feedback-form-state = ', localStorage.load("feedback-form-state"));
    localStorage.remove("feedback-form-state");
    form.reset();
  };
});

console.log(msg);