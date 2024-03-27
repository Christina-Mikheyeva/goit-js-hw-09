
const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
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
       input.value = retuneText.input.trim()
       textarea.value = retuneText.textarea.trim()
    }
}
setText()

function submitForm(e) {
    e.preventDefault()
    const data = {
        Email: input.value.trim(),
        Message: textarea.value.trim(),
    };

    if (input.value === "" || textarea.value === "") {
        alert("Fill all fields")
    }
    else {
        alert("Thanks, form send!")
        console.log(data)
        e.currentTarget.reset()
        localStorage.removeItem(storageKey)
    }    
}

