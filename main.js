const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// mobile toggle
// mobile toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("open");

   document.body.classList.toggle("menu-open");
  

});

// close menu when link is clicked
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("open");

   document.body.classList.toggle("menu-open");
    
  });
});



// SCROLL REVEAL
ScrollReveal().reveal(".reveal-left", {
  origin: "left",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".reveal-right", {
  origin: "right",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".reveal-top", {
  origin: "top",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
});
ScrollReveal().reveal(".reveal-bottom", {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  interval: 200,
});
ScrollReveal().reveal(".reveal", {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  interval: 200,
});



