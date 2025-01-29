let cards = document.querySelectorAll(".service-name");
let dropdown = document.querySelector(".dropdown");
let bars = document.querySelector(".fas");


let dropdownToggle = false;


cards.forEach(element => {
    element.addEventListener("click", () => {
        window.location.href = "/4You/ServiceProviderForm.html";
    })
});

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