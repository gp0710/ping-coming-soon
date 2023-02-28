const form = document.querySelector("form")
const email = document.querySelector("input[type='text']");
const error = document.querySelector("#email-error")
//See if input matches regEx for emails
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

form.addEventListener("submit", (e) => {
    const message = [];
    if( email.value == "" || email.value == "null" || regEx.test(email.value) == false) {
        message.push("Please provide a valid email address");
    } if( message.length > 0) {
        e.preventDefault();
        error.innerText = message.join(', ')
        email.classList.add("red");
    }
})