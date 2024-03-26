// MarkUp

const section = document.querySelector("section");

const markupForm =`
<form class="feedback-form" autocomplete="off">
    <label>
        Email
        <input type="email" name="email" autofocus />
    </label>

    <label>
        Message
        <textarea name="message" rows="8"></textarea>
    </label>

    <button type="submit">Submit</button>
</form>`

section.insertAdjacentHTML("beforeend", markupForm)

// Settings

const form = document.querySelector(".feedback-form");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const storageKey = "feedback-form-state";

form.addEventListener("input", getText)
form.addEventListener("submit", submitForm)

function getText() {
    const email = input.value.trim();
    const message = textarea.value.trim();
    
    const data = {
        input: email,
        textarea: message,
    };

    const jsonData = JSON.stringify(data);
    localStorage.setItem(storageKey, jsonData)
}

function setText() {
    const savedText = localStorage.getItem(storageKey);
    const retuneText = JSON.parse(savedText);

    if (retuneText) { 
       input.value.trim() = retuneText.input
       textarea.value.trim() = retuneText.textarea
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

