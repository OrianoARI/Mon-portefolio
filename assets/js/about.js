ScrollReveal({ reset: true });

ScrollReveal().reveal(".slide-right", {
    duration: 2000,
    origin: "left",
    distance: "1000px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".slide-left", {
    duration: 2000,
    origin: "right",
    distance: "1000px",
    easing: "ease-in-out"
  });

  ScrollReveal().reveal(".face", {
    duration: 4000,
    scale: 0.85
  });
  