
const form = document.querySelector(".feedback-form");
const input = document.querySelector(".feedback-form input[type='email']");
const textarea = document.querySelector(".feedback-form textarea");
const storageKey = "feedback-form-state";

form.addEventListener("input", getText)
form.addEventListener("submit", submitForm)

function getText() {
    
    const data = {
        email: input.value.trim(),
        message: textarea.value.trim(),
    };

    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData)
}

function setText() {
    const savedText = localStorage.getItem(storageKey);
    const retuneText = JSON.parse(savedText);

    if (retuneText) { 
       input.value = retuneText.email.trim()
       textarea.value = retuneText.message.trim()
    }
}
setText()

function submitForm(e) {
    e.preventDefault()
    const data = {
        email: input.value.trim(),
        message: textarea.value.trim(),
    };

    if (input.value === "" || textarea.value === "") {
        alert("Fill all fields")
    }
    else {
        console.log(data)
        e.currentTarget.reset()
        localStorage.removeItem(storageKey)
    }    
}
