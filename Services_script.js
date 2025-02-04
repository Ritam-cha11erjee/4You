let Plumber = document.querySelector("#Plumber");
let ApplianceRepair = document.querySelector("#ApplianceRepair");
let Carpentry = document.querySelector("#Carpentry");
let Nanny = document.querySelector("#Nanny");
let Beauty_Spa = document.querySelector("#Beauty_Spa");
let Babysitter = document.querySelector("#Babysitter");
let Cook = document.querySelector("#Cook");
let Maid = document.querySelector("#Maid");
let dropdown = document.querySelector(".dropdown");
let bars = document.querySelector(".fas");
let dropdownToggle = false;



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


bars.addEventListener("click", () => {

    if(!dropdownToggle){
    // dropdown.style.display = "block";
    dropdownToggle = true;

    dropdown.style.transform = "scale(1)"
    }

    else{
        dropdownToggle = false;

        dropdown.style.transform = "scale(0)"
    }
})
