//============================================================================ menu

// let menuContainer = document.querySelector('.menu-container');
// let burger = document.querySelector('#menuBurger');
// let burgerOne = document.querySelector('#burgerOne');
// let burgerTwo = document.querySelector('#burgerTwo');
// let burgerThree = document.querySelector('#burgerThree');
// let sideMenu = document.querySelector('.side-menu');
let loadingCircles = document.querySelector('.loading-circle');
let circleOne = document.querySelector('#circleOne');
let circleTwo = document.querySelector('#circleTwo');

function redirect(){
    window.location = "/projects";
};
    
   


// function burgerMenuClosed() {
//     burger.style.backgroundColor = "rgb(124, 0, 173)";
//     burgerOne.style.backgroundColor = "black";
//     burgerThree.style.backgroundColor = "black";
//     burgerTwo.style.backgroundColor = "black";
//     burgerOne.style.transition = "600ms";
//     burgerOne.style.transform = "rotate(45deg)";
//     burgerThree.style.position = "absolute";
//     burgerThree.style.transition = "600ms";
//     burgerOne.style.transform = "rotate(45deg)";
//     burgerThree.style.width = "0px";
//     burgerTwo.style.position = "absolute";
//     burgerTwo.style.transition = "600ms";
//     burgerTwo.style.transform = "rotate(135deg)"
//     menuContainer.style.transition = "600ms";
//     menuContainer.style.left = "270px";
//     burger.style.transition = "0";
//     burger.style.left = "-90px";
//     sideMenu.style.backgroundColor = "rgb(124, 0, 173)";
// }

// function burgerMenuOpen() {
//     burger.style.backgroundColor = "black";
//     burgerOne.style.backgroundColor = "rgb(124, 0, 173)";
//     burgerThree.style.backgroundColor = "rgb(124, 0, 173)";
//     burgerTwo.style.backgroundColor = "rgb(124, 0, 173)";
//     burgerOne.style.transition = "600ms";
//     burgerOne.style.transform = "initial";
//     burgerTwo.style.position = "initial";
//     burgerTwo.style.transition = "600ms";
//     burgerTwo.style.transform = "initial"
//     burgerThree.style.width = "35px";
//     burgerThree.style.transition = "600ms";
//     burgerThree.style.position = "initial";
//     menuContainer.style.transition = "600ms";
//     menuContainer.style.left = "0%";
//     burger.style.transition = "0";
//     burger.style.left = "0";
//     sideMenu.style.backgroundColor = "black";
// };


// burger.addEventListener('click', () => {
//     console.log('click');
//     if (burger.classList.contains("closed")) {
//         console.log('closed');
//         burger.classList.replace("closed", "opened");
//         burgerMenuClosed();
//     } else if (burger.classList.contains("opened")) {
//         burger.classList.replace("opened", "closed");
//         console.log('open');
//         burgerMenuOpen()
//     }

// });

let lockText = document.querySelector("#lockText");


loadingCircles.addEventListener("click", () => {
    circleOne.style.transform = "rotate(360deg)";
    circleOne.style.transition = "1500ms";
    circleTwo.style.transform = "rotate(-360deg)";
    circleTwo.style.transition = "1500ms";
    lockText.innerHTML = "UNLOCK";
    lockText.style.color = "orange";
    lockText.style.textShadow = "2px 2px 2px rgba(255, 166, 0, 0.581)";
    setTimeout(reverse, 2000);
    setTimeout(redirect, 4000);
})


function reverse() {
    console.log('ggggg');
    circleOne.style.transform = "rotate(-360deg)";
    circleOne.style.transition = "1500ms";
    circleTwo.style.transform = "rotate(360deg)";
    circleTwo.style.transition = "1500ms";
    lockText.innerHTML = "OPENED";
    lockText.style.color = "rgba(170, 255, 43)";
    lockText.style.textShadow = "2px 2px 2px rgba(170, 255, 43, 0.63)";
}

//================================================================