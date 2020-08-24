const autumnB = document.getElementById("autumn");
const winterB = document.getElementById("winter");

const arrowL = document.querySelector(".fa-arrow-left");
const arrowR = document.querySelector(".fa-arrow-right");
let shownA = 0;
let shownW = 0;
document.querySelector(".white-slider").style.transform = "translate(-100%)";
document.querySelector(".menu-slider2").style.transform = "translate(-100%)";


arrowL.addEventListener("click", function () {
    autumnB.classList.add("selected");
    winterB.classList.remove("selected");
    landing_slider1();
    menu_slider1();
});
arrowR.addEventListener("click", function () {
    autumnB.classList.remove("selected");
    winterB.classList.add("selected");
    landing_slider2();
    menu_slider2();
});
autumnB.addEventListener("click", function () {
    autumnB.classList.add("selected");
    winterB.classList.remove("selected");
    landing_slider1();
    menu_slider1();
});

winterB.addEventListener("click", function () {
    autumnB.classList.remove("selected");
    winterB.classList.add("selected");
    landing_slider2();
    menu_slider2();
})

function landing_slider1() {
    const tl = gsap.timeline();
    tl.to(".white-slider", {
        x: "0%",
        duration: 1
    });
    tl.set(".landing-slider1", {
        background: "url(./img/autum2.jpg) no-repeat center/cover"
    });
    tl.to(".white-slider", {
        x: "-100%",
        duration: 0.5
    });
}


function landing_slider2() {
    const tl = gsap.timeline();
    tl.to(".white-slider", {
        x: "0%",
        duration: 1
    });
    tl.set(".landing-slider1", {
        background: "url(./img/winter2.jpg) no-repeat center/cover"
    });
    tl.to(".white-slider", {
        x: "100%",
        duration: 0.5
    });

}

function menu_slider1() {

    gsap.to(".menu-slider1", {
        x: "0%",
        duration: 1
    });

    gsap.to(".menu-slider2", {
        x: "-100%",
        duration: 1
    });
}

// first
function menu_slider2() {

    gsap.to(".menu-slider2", {
        x: "0",
        duration: 1
    });
    gsap.to(".menu-slider1", {
        x: "100%",
        duration: 1
    });

}