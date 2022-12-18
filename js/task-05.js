
const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", textContentMaker);

function textContentMaker(event) {
    if (event.currentTarget.value === "") { 
        textOutput.textContent = "Anonymous";
    } else textOutput.textContent = event.currentTarget.value;
};