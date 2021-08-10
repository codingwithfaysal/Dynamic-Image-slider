const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const thumbnail = document.querySelectorAll(".thumnal");
const main_div = document.querySelector(".main_div");


let backgroundImage = new Array(
    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.jpg",
    "img/bg4.jpg",
    "img/bg5.jpg",
    "img/bg6.jpg",
)
let i = 0;
next.addEventListener("click", function(){
    if(i < 5){
        main_div.style.backgroundImage = `url(${backgroundImage[i+1]})`;
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
})
prev.addEventListener("click", function(){
    if(i > 0){
        main_div.style.backgroundImage = `url(${backgroundImage[i-1]})`;
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
})
