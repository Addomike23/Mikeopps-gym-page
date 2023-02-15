const menu2 = document.querySelector(".menu");
const display = document.querySelector(".links");


menu2.addEventListener("click", function () {

    if (display.style.right == "0px") {
        display.style.right = "-200px";

    }
    else {
        display.style.right = "0px"
    }
})



/*---------forn controller-------*/

window.onload = function () {


    const form = document.querySelector('#form-box');
    const signBtn = document.querySelector(".sign-up");
    



    signBtn.addEventListener('click', () => {
        

        const firstName = document.querySelector("#first-name").value;
        const secondName = document.querySelector("#second-name").value;
        const emailEl = document.querySelector("#email").value;
        const passWord = document.querySelector("#password").value;

        console.log("First-Name: " + firstName);
        console.log("Second-Name: " + secondName);
        console.log("Email: " + emailEl);
        console.log("Password: " +passWord);


    })


}
