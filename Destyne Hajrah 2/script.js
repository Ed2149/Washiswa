// script.js

// Dark mode toggle
document.getElementById("toggle-theme")?.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form feedback
document.querySelector("form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for your message, we’ll get back to you soon!");
});