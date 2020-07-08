const form = document.getElementById("form");
const form = document.getElementById("username");
const form = document.getElementById("email");
const form = document.getElementById("password");
const form = document.getElementById("password2");

//Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

//Check if email is valid
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener("submit", function(e){ 
    e.preventDefault();

    if(username.value === ''){
        showError(username, "Username is required")
    } else {
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, "Email is required")
    } else if(isValidEmail){
        showError(email, "Email is not valid")
    } else {
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, "Password is required")
    } else {
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, "Please repeat password.")
    } else {
        showSuccess(password2);
    }
});