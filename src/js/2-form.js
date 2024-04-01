
const form = document.querySelector(".feedback-form");
const input = document.querySelector("form [name='email']");
const textarea = document.querySelector("form [name='message']");
const storageKey = "feedback-form-state";

form.addEventListener("input", handleInputUpdate)
form.addEventListener("submit", submitForm)

function handleInputUpdate() {
    
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

    if (input.value.trim() === "" || textarea.value.trim() === "") {
        alert("Fill all fields")
    }
    else {
        console.log(data)
        e.currentTarget.reset()
        localStorage.removeItem(storageKey)
    }    
}
