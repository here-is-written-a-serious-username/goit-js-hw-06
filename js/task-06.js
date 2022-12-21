

const input = document.querySelector("#validation-input");

input.addEventListener("blur", onValidatorInputBlur);


function onValidatorInputBlur(event) {
    
    const inputContentLength = event.currentTarget.value.split("").length;
    
    if (inputContentLength === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (inputContentLength !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    };
}