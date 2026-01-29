const button = document.querySelector(".btn");
// const colorButton = document.querySelector('#colorBtn')
const body = document.querySelector('body');
let isred = true;
const changeColor = function () {
  if (isred) {
    body.style.backgroundColor = "red";
  } else {
    body.style.backgroundColor = "yellow";
  }
  isred = !isred;
};
let valid = null;
button.addEventListener("click", function () {
  if (valid == null) {
    valid = setInterval(changeColor, 100);
    button.textContent = "stop";
  } else {
    clearInterval(valid);
    button.textContent = "start";
    valid = null;
  }
});
