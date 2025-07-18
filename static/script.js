window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".site-heading-h");
  const subheading = document.querySelector(".site-heading-p");

  heading.classList.add("animate");
  setTimeout(() => {
    subheading.classList.add("animate");
  }, 800);

  // Mobile menu toggle
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");
  
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});
