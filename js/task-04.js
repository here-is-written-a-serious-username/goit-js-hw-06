

const spanEl = document.querySelector("#value");
let counterValue = 0


const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');


btnDecrement.addEventListener("click", onDecrementBtnClick);

btnIncrement.addEventListener("click", onIncrementBtnClick);


function onDecrementBtnClick(event) {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

function onIncrementBtnClick() {
    counterValue += 1;
    spanEl.textContent = counterValue;
}