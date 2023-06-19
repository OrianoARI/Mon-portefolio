ScrollReveal({ reset: true });

// ScrollReveal().reveal(".slide-right", {
//     duration: 2000,
//     origin: "left",
//     distance: "1000px",
//     easing: "ease-in-out"
//   });

//   ScrollReveal().reveal(".slide-left", {
//     duration: 2000,
//     origin: "right",
//     distance: "1000px",
//     easing: "ease-in-out"
//   });

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


window.addEventListener('wheel', function (event) {

  if (event.deltaY > 0) {
    // Scroll up
    scrollDown();
  }
});