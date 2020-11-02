// Variables to manipulate
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var hero = document.getElementById("hero");

// Array to all background images
var backgroundImg = new Array(
    "/img/sky1.jpg",
    "/img/sky2.jpg",
    "/img/sky3.jpg",
    "/img/sky4.jpg",
    "/img/sky5.jpg",
);

let i = 0;
// Function to add click event
next.onclick = function () {
    // Limiting slide amount
    if (i < 4) {
        hero.style.backgroundImage = 'url(" '+backgroundImg[i + 1]+' ")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function () {
    // Limiting slide amount
    if (i > 0) {
        hero.style.backgroundImage = 'url(" '+backgroundImg[i - 1]+' ")';
        thumbnail[i - 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}