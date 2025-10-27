// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for contacting ShinyHomes! We'll get back to you soon.");
  e.target.reset();
});

// Book Now button scrolls to contact
document.getElementById("bookNow").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});
