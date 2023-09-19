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
  // let msgTmp = localStorage.load("feedback-form-state");
  let msgTmp = localStorage.load(storageItem);

  if (msgTmp != undefined) {
    msg = msgTmp;
    return true;
  }
  return false;
}

// if (msg != undefined) {
//   textInput.value = msg.email;
//   textAreaInput.value = msg.message;
// };
//
// textInput.addEventListener("input", (e) => {
//   msg.email = e.currentTarget.value;
//   localStorage.save("feedback-form-state", msg)
//   console.log(msg.email);
// });

if (hasStorageItem("feedback-form-state") === true) {
  textInput.value = msg.email;
  textAreaInput.value = msg.message;
}

// textInput.addEventListener(
//   "change",
//   _throttle((e) => {
//     if (e.currentTarget != null) {
//       // const form = e.currentTarget;
//       msg.email = e.currentTarget.value;
//       localStorage.save("feedback-form-state", msg);
//       console.log(msg.email);
//     }
//   }, 500),
// );

textInput.addEventListener(
  "input",
  _throttle((e) => {
    if (e.currentTarget != null) {
      // const form = e.currentTarget;
      msg.email = e.currentTarget.value;
      localStorage.save("feedback-form-state", msg);
      console.log(msg.email);
    }
  }, 500),
);

// textAreaInput.addEventListener(
//   "change",
//   _throttle((e) => {
//     if (e.currentTarget != null) {
//       msg.message = e.currentTarget.value;
//       localStorage.save("feedback-form-state", msg);
//       console.log(msg.message);
//     }
//   }, 500),
// );

textAreaInput.addEventListener(
  "input",
  _throttle((e) => {
    if (e.currentTarget != null) {
      msg.message = e.currentTarget.value;
      localStorage.save("feedback-form-state", msg);
      console.log(msg.message);
    }
  }, 500),
);

msgForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  msg.email = form.elements.email.value;
  msg.message = form.elements.message.value;
  localStorage.save("feedback-form-state", msg);
  console.log('localStorage: feedback-form-state = ', localStorage.load("feedback-form-state"));
  localStorage.remove("feedback-form-state");
  form.reset();
  console.log('cache: feedback-form-state = ', msg);
});

console.log(msg);