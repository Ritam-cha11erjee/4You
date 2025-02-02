let Plumber = document.querySelector("#Plumber");
let ApplianceRepair = document.querySelector("#ApplianceRepair");
let Carpentry = document.querySelector("#Carpentry");
let Nanny = document.querySelector("#Nanny");
let Beauty_Spa = document.querySelector("#Beauty_Spa");
let Babysitter = document.querySelector("#Babysitter");
let Cook = document.querySelector("#Cook");
let Maid = document.querySelector("#Maid");

Plumber.addEventListener("click", () => {
sessionStorage.setItem('nameString', "Plumber");
window.location.href = "/4You/workplace.html";
})

ApplianceRepair.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Appliance Repair");
    window.location.href = "/4You/workplace.html";
})

Carpentry.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Carpentry");
    window.location.href = "/4You/workplace.html";
})

Nanny.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Nanny");
    window.location.href = "/4You/workplace.html";
})

Beauty_Spa.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Beauty & Spa");
    window.location.href = "/4You/workplace.html";
})

Babysitter.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Babysitter");
    window.location.href = "/4You/workplace.html";
})

Cook.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Cook");
    window.location.href = "/4You/workplace.html";
})

Maid.addEventListener("click", () => {
    sessionStorage.setItem('nameString', "Maid");
    window.location.href = "/4You/workplace.html";
})
