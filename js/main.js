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

// Hide left arrow on first thumbnail
if (i == 0) {
    document.getElementById("prev").style.display = "none";
}

// Function to add click event
next.onclick = function () {
    // Limiting slide amount
    if (i < 4) {
        hero.style.backgroundImage = 'url(" '+backgroundImg[i + 1]+' ")';
        thumbnail[i + 1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
    // Show left arrow before first thumbnail
    if (i > 0) {
        document.getElementById("prev").style.display = "block";
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
    // Hide left arrow on first thumbnail
    if (i == 0) {
        document.getElementById("prev").style.display = "none";
    }
}