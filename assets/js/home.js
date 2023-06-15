let loadingCircles = document.querySelector('.loading-circle');
let circleOne = document.querySelector('#circleOne');
let circleTwo = document.querySelector('#circleTwo');

function redirect() {
    window.location = "/projects";
};



let isAudioPlaying = false;
let audio = new Audio("/sounds/Never-fade-away.mp3");
let lockText = document.querySelector("#lockText");

// Écoute l'événement 'ended' pour le son
audio.addEventListener("ended", function () {
    this.currentTime = 0; // Réinitialise la position de lecture à 0
    this.play(); // Redémarre la lecture du son
});

audio.addEventListener("play", function () {
    isAudioPlaying = true;
    lockText.classList.replace('fa-volume-xmark', 'fa-volume-high')

});

audio.addEventListener("pause", function () {
    isAudioPlaying = false;
    lockText.classList.replace('fa-volume-high', 'fa-volume-xmark')
});


loadingCircles.addEventListener("click", () => {
    if (isAudioPlaying) {
        audio.pause();
        isAudioPlaying = false;
    } else {
        audio.play();
        isAudioPlaying = true;
    }
    circleOne.style.transform = "rotate(360deg)";
    circleOne.style.transition = "1500ms";
    circleTwo.style.transform = "rotate(-360deg)";
    circleTwo.style.transition = "1500ms";
    setTimeout(reverse, 2000);
})


function reverse() {
    circleOne.style.transform = "rotate(-360deg)";
    circleOne.style.transition = "1500ms";
    circleTwo.style.transform = "rotate(360deg)";
    circleTwo.style.transition = "1500ms";
}


//================================================================

let leftFront = document.querySelector(".left-front");
let rightFront = document.querySelector(".right-front");
let hey = document.querySelector(".hey");



function scrollDown() {
    leftFront.style.transition = "2000ms";
    leftFront.style.transform = "translateX(-80%)";
    rightFront.style.transition = "2000ms";
    rightFront.style.transform = "translateX(80%)";
    hey.style.transition = "2000ms";
    hey.style.top = "20%";
}

function scrollUp() {
    leftFront.style.transition = "2000ms";
    leftFront.style.transform = "translateX(0%)";
    rightFront.style.transition = "2000ms";
    rightFront.style.transform = "translate(0%)";
    hey.style.transition = "2000ms";
    hey.style.top = "100%";
}

let mailModal = document.querySelector(".modal");

window.addEventListener('wheel', function (event) {
    if (modal.classList.contains('opened')) {
        return;
      }

    if (event.deltaY < 0) {
        // Scroll up
        scrollUp();

        
    } else {
        // Scroll down
        scrollDown();
        
    }
});

// Fermeture message de mail

let closeMessage = document.querySelectorAll(".close-message");

closeMessage.forEach(element => {
    element.addEventListener("click", ()=>{
        mailMessage.classList.add('hidden');
    });
});


// Appel de la fonction showLetters pour chaque élément avec la classe "text"
