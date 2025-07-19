window.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".site-heading-h");
  const subheading = document.querySelector(".site-heading-p");

  heading.classList.add("animate");
  setTimeout(() => {
    subheading.classList.add("animate");
  }, 800);

  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Close mobile menu on nav link click
  const navLinks = nav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });

  // Optional: Header background change on scroll (if you want)
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const points = [
    "Quality Assurance",
    "Years of Experience",
    "Trusted Global Network",
    "24x7 Customer Support",
    "Transparent Processes"
  ];

  let index = 0;
  const pointEl = document.getElementById("trust-point");

  setInterval(() => {
    index = (index + 1) % points.length;
    pointEl.classList.remove("fade");
    void pointEl.offsetWidth; // trigger reflow
    pointEl.textContent = points[index];
    pointEl.classList.add("fade");
  }, 3000);
});

window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-section');
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
});
