ScrollReveal({ reset: true });


ScrollReveal().reveal(".face", {
  duration: 4000,
  scale: 0.85
});

let slideRight = document.querySelector(".slide-right");
let slideLeft = document.querySelector(".slide-left");

let slideRlenght = window.getComputedStyle(slideRight).width;

console.log(slideRlenght);



//   function scrollUp() {
//     slideRight.style.transition = "3000ms";
//     slideRight.style.transform = "translateX(-150%)";
//     slideLeft.style.transition = "3000ms";
//     slideLeft.style.transform = "translateX(150%)";
// }



function scrollDown() {
  slideRight.style.transition = "3000ms";
  slideRight.style.left = "17%"
  slideLeft.style.transition = "3000ms";
  slideLeft.style.right = "17%";
}



function handleScroll(event) {
  if (event.deltaY > 0) {
    // Scroll down
    scrollDown();
  }
}
// Événement de défilement avec la souris
window.addEventListener('wheel', handleScroll);

// Événement de défilement tactile sur mobile
window.addEventListener('touchmove', function(event) {
  // Récupérer la position de défilement vertical sur mobile
  var touchY = event.touches[0].clientY;
  var previousTouchY = 0;

  if (touchY > previousTouchY) {
    // Scroll down
    scrollDown();
  }

  previousTouchY = touchY;
});