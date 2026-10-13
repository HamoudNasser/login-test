
let form = document.querySelector("#registrationForm");
let firstname = document.querySelector("#fname");
let lastname = document.querySelector("#lname");
let country = document.querySelector("#country");
let message = document.querySelector("#message");

form.addEventListener("submit", validate);

function validate(event) {
    event.preventDefault();

    let fname = firstname.value.trim();
    let lname = lastname.value.trim();

    if (fname == "" || lname == "" || country.value == "") {
        message.innerHTML = "Please Fill All Fields";
        message.style.color = "red";
    }
    else if (fname.length < 3 || fname.length > 15) {
        message.innerHTML = "First Name Must Be Between 3 and 15 Characters";
        message.style.color = "red";
    }
    else if (lname.length < 3 || lname.length > 15) {
        message.innerHTML = "Last Name Must Be Between 3 and 15 Characters";
        message.style.color = "red";
    }
    else {
        message.innerHTML = "Welcome " + fname;
        message.style.color = "green";
    }
}
