const infoFromLogin = {
    email: "",
    password:"",
};

const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;

    infoFromLogin.email = email.value;
    infoFromLogin.password = password.value;

    if (email.value === "" || password.value === "") {
        alert("Wow-wow-wow!!! Don't you see that not all the fields are filled in??? \nFill them quickly or Goodbye)))");
    } else console.log(infoFromLogin);
        
    // console.log(`Email: ${email.value}, Password: ${password.value}`);

    event.currentTarget.reset();
}