let menuContainer = document.querySelector('.menu-container');
let burger = document.querySelector('#menuBurger');
let burgerOne = document.querySelector('#burgerOne');
let burgerTwo = document.querySelector('#burgerTwo');
let burgerThree = document.querySelector('#burgerThree');
let sideMenu = document.querySelector('.side-menu');
let logBtn = document.querySelector('.hidden')
let counter = 0;


function burgerMenuClosed() {
    burger.style.backgroundColor = "rgb(124, 0, 173)";
    burgerOne.style.backgroundColor = "black";
    burgerThree.style.backgroundColor = "black";
    burgerTwo.style.backgroundColor = "black";
    burgerOne.style.transition = "600ms";
    burgerOne.style.transform = "rotate(45deg)";
    burgerThree.style.position = "absolute";
    burgerThree.style.transition = "600ms";
    burgerOne.style.transform = "rotate(45deg)";
    burgerThree.style.width = "0px";
    burgerTwo.style.position = "absolute";
    burgerTwo.style.transition = "600ms";
    burgerTwo.style.transform = "rotate(135deg)"
    menuContainer.style.transition = "600ms";
    menuContainer.style.left = "270px";
    burger.style.transition = "0";
    burger.style.left = "-90px";
    sideMenu.style.backgroundColor = "rgb(124, 0, 173)";
}

function burgerMenuOpen() {
    burger.style.backgroundColor = "black";
    burgerOne.style.backgroundColor = "rgb(124, 0, 173)";
    burgerThree.style.backgroundColor = "rgb(124, 0, 173)";
    burgerTwo.style.backgroundColor = "rgb(124, 0, 173)";
    burgerOne.style.transition = "600ms";
    burgerOne.style.transform = "initial";
    burgerTwo.style.position = "initial";
    burgerTwo.style.transition = "600ms";
    burgerTwo.style.transform = "initial"
    burgerThree.style.width = "35px";
    burgerThree.style.transition = "600ms";
    burgerThree.style.position = "initial";
    menuContainer.style.transition = "600ms";
    menuContainer.style.left = "0%";
    burger.style.transition = "0";
    burger.style.left = "0";
    sideMenu.style.backgroundColor = "black";
};


burger.addEventListener('click', () => {
    console.log('click');
    if (burger.classList.contains("closed")) {
        console.log('closed');
        burger.classList.replace("closed", "opened");
        burgerMenuClosed();
    } else if (burger.classList.contains("opened")) {
        burger.classList.replace("opened", "closed");
        console.log('open');
        burgerMenuOpen()
    }

});


//------------------login caché----------------------------------------------------
function clickCounter() {
    counter++
    if (counter == 5) {
        window.location.href = "/login";
    }
};

logBtn.addEventListener("click", () => {
   clickCounter()
});




//---------------------------------------------------------------------------------

//animation apparition lettres-----------------------------------------------------

// function showLetters(elementId) {
//     elementId = document.querySelector(".text")
//     const element = elementId;
//     const text = element.textContent;
//     element.textContent = '';
  
//     for (let i = 0; i < text.length; i++) {
//       const letter = document.createElement('span');
//       letter.className = 'letter';
//       letter.textContent = text[i];
//       element.appendChild(letter);
//     }
  
//     const letters = element.getElementsByClassName('letter');
//     let delay = 100; // Délai entre chaque lettre (100 ms dans cet exemple)
  
//     for (let i = 0; i < letters.length; i++) {
//       setTimeout(() => {
//         letters[i].style.visibility = 'visible';
//       }, delay);
//       delay += 100; // Augmentez le délai pour chaque lettre (100 ms dans cet exemple)
//     }
//   }
  
//   // Utilisation : Appeler la fonction showLetters avec l'ID de l'élément contenant le texte
//   showLetters('text');