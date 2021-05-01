const email = document.getElementById('email');

function ValidateEmail() {
    if (emailIsValid(email.value)) {
        email.nextElementSibling.style.display = "none";
        email.classList.remove('invalid');
    }
    else {
        email.placeholder = "example@email/com";
        email.nextElementSibling.style.display = "block";
        email.value = "";
        email.classList.add('invalid');
    }
}


function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}