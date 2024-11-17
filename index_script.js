 let slideshow = document.querySelector(".slideshow");
 let element = document.querySelectorAll(".SSimage");
 let prev = document.getElementById("prev");
 let next = document.getElementById("next");
let counter = 0;
let maxSlides = 4;
let intervalID;

initiateSlideshow();

function initiateSlideshow(){

    intervalID = setInterval(() => {
        goNext();
    }, 5000);
}

 next.addEventListener("click", () => {intervalID = clearInterval(intervalID); goNext();})

 prev.addEventListener("click", goPrev)


 function goNext(){

    if(counter == maxSlides-1){
        counter = 0;
    }
    else
    counter ++;
    slideshow.style.transform = `translateX(-${counter*25}%)`
    
 }

 function goPrev(){

    intervalID = clearInterval(intervalID);


    if(counter == 0){
        counter = maxSlides-1;
    }
    else
    counter --;
    slideshow.style.transform = `translateX(-${counter*25}%)`

 }
 