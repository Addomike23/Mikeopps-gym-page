/*---toggle menu--------*/

let linkEl = document.getElementById("links");
let menuEl = document.querySelector('#menu');
let buttonEl = document.querySelector("#btns");




/*------toggle function------*/



menuEl.addEventListener("click", function () {

    if (linkEl.style.right == "0px") {
        linkEl.style.right = "-200px";

    }
    else {
        linkEl.style.right = "0px"
    }
})






/*-----changing Backgrounds------*/

const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const textColors = ["white", "voilet", "chartreuse","lightblue ", "tomato"];
const serviceEl = document.querySelector('.service-container');
const backgroundEl = document.querySelector('#hide');
const textEl = Array.from(document.querySelectorAll(".hide-text"));
const textColors2 = ["white", "red", "chartreuse","lightblue ", "tomato"];


backgroundEl.addEventListener('click', () => {
    let hex = '#';
    for (let i = 0; i < 6; i++) {
        hex += colors[randColor()]

    }
    serviceEl.style.backgroundColor = hex

    textEl.map(text => {

        let colorData = textColors[randomTextColor()];
        text.style.color = colorData
    })


})
function randomTextColor() {
    return Math.floor(Math.random() * textColors.length)
}

function randColor() {
    return Math.floor(Math.random() * colors.length)
}

/*-----header background effects-------*/

const headerEl = document.querySelector(".header");
const transform = document.querySelector("#span");
const h1El = document.querySelector("#h1");
const normalEl = document.getElementsByClassName("normal");





window.onload = function () {
    headerEl.classList.add('header');
    function changeBackground() {
        


        const images = ["background/bg-1\ \(1\).jpg", "background/bg-1\ \(2\).jpg", "background/bg-1\ \(3\).jpg", "background/bg-1\ \(4\).jpg", "background/bg-1\ \(5\).jpg",
            "background/bg-1\ \(6\).jpg",]

        let i = Math.floor(Math.random() * images.length);
        headerEl.style.backgroundImage = 'url("' + images[i] + '")';
        



    }
    




    function changeText() {
        const quotes = ["FRESH LOOKING WITH YOUR BODY", "ATTRACTS PEOPLE WITH YOUR FORM", "BURN FATS THROUGH EXERCISE"];
        const quotes_2 = ["Shape Your Perfect Body", "No Pain No Gain", "Welcome To MKFitnessSport", "Easy With Our Gym"];

        let j = Math.floor(Math.random() * quotes.length);
        let a = Math.floor(Math.random() * quotes_2.length);

        transform.innerHTML = quotes[j]
        transform.style.color = textColors2[randomTextColor()];

        h1El.innerHTML = quotes_2[a]
        h1El.style.color = textColors2[randomTextColor()];


    }

    window.setInterval(() => {
        changeBackground()
    }, 10000);

    window.setInterval(() => {
        changeText()
    }, 5000);

    /*----------slide-------------*/

    const infoEl = document.querySelector(".info");
    const slideBtn = document.querySelector("#slide-btn");

    slideBtn.addEventListener('click', function() {
        if(infoEl.style.right == '-350px'){
            infoEl.style.right = '0px'
        }else{
            infoEl.style.right = '-350px'
        }
        
    })
}
