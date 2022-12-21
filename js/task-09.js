

const body = document.body;
const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
 
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

}







