import"./assets/styles-44dfdf90.js";const n=document.querySelector(".feedback-form"),a=document.querySelector("input"),r=document.querySelector("textarea"),o="feedback-form-state";n.addEventListener("input",s);n.addEventListener("submit",i);function s(){const t={email:a.value.trim(),message:r.value.trim()},e=JSON.stringify(t);localStorage.setItem(o,e)}function l(){const t=localStorage.getItem(o),e=JSON.parse(t);e&&(a.value=e.input.trim(),r.value=e.textarea.trim())}l();function i(t){t.preventDefault();const e={Email:a.value.trim(),Message:r.value.trim()};a.value===""||r.value===""?alert("Fill all fields"):(alert("Thanks, form send!"),console.log(e),t.currentTarget.reset(),localStorage.removeItem(o))}
//# sourceMappingURL=commonHelpers2.js.map
