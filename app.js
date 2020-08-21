//  menu-slider
//  landing-slider
const menu_slider = document.getElementById('menu-slider');
const landing_slider = document.getElementById('landing-slider');

let counter = 0;
const menu_slider1 = document.querySelector(".imgs-information-imgs").children
const menu_slider1 = document.querySelector(".imgs-information-imgs").children



function change(season) {
    console.log(menu_slider1)
    if (season === 'a') {
        counter++;
        menu_slider1[0].classList.add("img-shown");
        menu_slider1[0].classList.remove("img-hidden");

        menu_slider1[1].classList.add("img-hidden");
        menu_slider1[1].classList.remove("img-shown");

    } else {
        counter--;
        menu_slider1[0].classList.remove("img-shown");
        menu_slider1[0].classList.add("img-hidden");

        menu_slider1[1].classList.add("img-shown");
        menu_slider1[1].classList.add("img-hidden");

    }
}