const autumnB = document.getElementById("autumn")
const winterB = document.getElementById("winter")

const arrowL = document.querySelector(".fa-arrow-left")
const arrowR = document.querySelector(".fa-arrow-right")
// 0 autumn shown 1 winter shown
let shownM = 0;
let shownL = 0;

arrowL.addEventListener("click", function () {
    menu_slider1();
    landing_slider1();
});

arrowR.addEventListener("click", function () {
    menu_slider2();
    landing_slider2();
})

autumnB.addEventListener("click", function () {
    menu_slider1();
    landing_slider1();
});

winterB.addEventListener("click", function () {
    menu_slider2();
    landing_slider2();
})

function menu_slider1() {

    if (shownM === 0) return;
    gsap.to(".menu-slider1", {
        x: "0%",
        duration: 1
    })

    gsap.to(".menu-slider2", {
        x: "-100%",
        duration: 1
    })
    shownM = 0;
}


function menu_slider2() {

    if (shownM === 1) return;
    gsap.to(".menu-slider2", {
        x: "0",
        duration: 1
    })
    gsap.to(".menu-slider1", {
        x: "100%",
        duration: 1
    })

    shownM = 1;
}

function landing_slider1() {
    if (shownL === 0) return;
    gsap.to(".landing-slider1", {
        x: "0%",
        duration: 1
    })
    gsap.from(".landing-slider1", {
        scale: 1.5,
        delay: 0.2,
        duration: 0.9
    })
    gsap.to(".landing-slider2", {
        x: "-100%",
        duration: 1
    })
    shownL = 0;
}

function landing_slider2() {
    if (shownL === 1) return;

    gsap.to(".landing-slider1", {
        x: "100%",
        duration: 1
    })

    gsap.to(".landing-slider2", {
        x: "0",
        duration: 1
    })
    shownL = 1;

}