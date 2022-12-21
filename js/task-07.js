

const input = document.querySelector("#font-size-control");
input.value = "16";

const text = document.querySelector("#text");

input.addEventListener("input", fontSizeMaker);

function fontSizeMaker(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}