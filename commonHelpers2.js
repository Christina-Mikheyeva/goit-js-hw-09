import"./assets/styles-da77b3e6.js";const l=document.querySelector("section"),c=`
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
</form>`;l.insertAdjacentHTML("beforeend",c);const r=document.querySelector(".feedback-form"),a=document.querySelector("input"),o=document.querySelector("textarea"),n="feedback-form-state";r.addEventListener("input",u);r.addEventListener("submit",i);function u(){const e=a.value,t=o.value,s=JSON.stringify({input:e,textarea:t});localStorage.setItem(n,s)}function m(){const e=localStorage.getItem(n),t=JSON.parse(e);t&&(a.value=t.input,o.value=t.textarea)}m();function i(e){a.value===""||o.value===""?alert("Fill all fields"):(e.preventDefault(),alert("Thanks, form send!"),e.currentTarget.reset(),localStorage.removeItem(n))}
//# sourceMappingURL=commonHelpers2.js.map
