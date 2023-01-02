

const divControls = document.querySelector("#controls");
const input = divControls.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");



divBoxes.style = 'display: flex; gap: 5px; flex-wrap: wrap;';


btnCreate.addEventListener("click", onBtnCreateClick);
btnDestroy.addEventListener("click", onBtnDestroyClick);


function onBtnCreateClick() {
  const amount = input.value;
  return createBoxes(amount);
}

function createBoxes(amount) {
  const divBoxesArray = [];
  let size = 0;

  if (divBoxes.lastElementChild === null) {
    size = 20;
  } else {
    size = Number.parseInt(divBoxes.lastElementChild.style.width);
  }

  for (let i = 1; i <= amount; i += 1) {
    const divBox = document.createElement("div");
    divBox.style.backgroundColor = getRandomHexColor();

    size += 10;

    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;

    console.log(size);

    divBoxesArray.push(divBox);
  }

  divBoxes.append(...divBoxesArray);
}


function onBtnDestroyClick() {
  divBoxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
