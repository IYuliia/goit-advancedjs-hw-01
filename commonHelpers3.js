import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as r}from"./assets/vendor-78be7656.js";const s="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",r(l,500));window.addEventListener("load",n);e.addEventListener("submit",i);let a={email:"",message:""};function l(){a={email:e.email.value,message:e.message.value};const t=JSON.stringify(a);localStorage.setItem(s,t)}function n(){const t=localStorage.getItem(s);if(t)try{const o=JSON.parse(t);e.email.value=o.email,e.message.value=o.message}catch(o){console.error("Error parsing JSON from local storage:",o)}}function i(t){if(t.preventDefault(),a.email===""||a.message===""){alert("Please fill in all fields before submitting.");return}console.log(a),e.reset(),localStorage.removeItem(s)}
//# sourceMappingURL=commonHelpers3.js.map
