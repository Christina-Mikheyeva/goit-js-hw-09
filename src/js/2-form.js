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
    const email = input.value;
    const message = textarea.value;
    
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
       input.value = retuneText.input
       textarea.value = retuneText.textarea
    }
}
setText()

function submitForm(e) {
    if (input.value === "" || textarea.value === "") {
        alert("Fill all fields")
    }
    else {
        e.preventDefault()
        alert("Thanks, form send!")
        e.currentTarget.reset()
        localStorage.removeItem(storageKey)
    }    
}
