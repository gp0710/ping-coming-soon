const form = document.querySelector("form")
const email = document.querySelector("input[type='email']");
const error = document.querySelector("#email-error")
//See if input matches regEx for emails
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

form.addEventListener("submit", (e) => {
    const message = [];
    if( email.value == "" || email.value == "null" || email.value !== regEx) {
        messages.push("Please provide a valid email address");
        console.log(messages)
    }
    if( messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join(', ')
    
    }
})