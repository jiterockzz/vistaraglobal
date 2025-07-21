window.addEventListener("DOMContentLoaded", () => {
  // Animate heading if present
  const heading = document.querySelector(".site-heading-h");
  const subheading = document.querySelector(".site-heading-p");

  if (heading && subheading) {
    heading.classList.add("animate");
    setTimeout(() => {
      subheading.classList.add("animate");
    }, 800);
  }

  // Menu toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("show"); // Match with CSS
    });

    // Auto-close on link click
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
      });
    });
  }

  // Scroll header animation
  const header = document.querySelector(".main-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight - 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Trust points animation if exists
  const pointEl = document.getElementById("trust-point");
  if (pointEl) {
    const points = [
      "Quality Assurance",
      "Years of Experience",
      "Trusted Global Network",
      "24x7 Customer Support",
      "Transparent Processes"
    ];
    let index = 0;
    setInterval(() => {
      index = (index + 1) % points.length;
      pointEl.classList.remove("fade");
      void pointEl.offsetWidth;
      pointEl.textContent = points[index];
      pointEl.classList.add("fade");
    }, 3000);
  }

  // Section animations on scroll
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-section');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(section => observer.observe(section));

  // Contact form handling
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.checkValidity()) {
        alert('Please fill out all required fields correctly.');
        return;
      }
      alert('Thank you for your inquiry! We will get back to you soon.');
      form.reset();
    });
  }
});
