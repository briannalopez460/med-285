// ----- Mobile nav toggle -----
const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  // little X animation
  burger.classList.toggle("close");
});

// ----- Fade-in on scroll -----
const faders = document.querySelectorAll(".fade");
const appearOpts = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    obs.unobserve(entry.target);
  });
}, appearOpts);
faders.forEach(f => appearOnScroll.observe(f));