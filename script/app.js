import { home } from "/sections/home.js";
import { services } from "/sections/services.js";
import { portfolio } from "/sections/portfolio.js";
import { contact } from "/sections/contact.js";

const content = document.getElementById("content");

const sections = { home, services, portfolio, contact };

function loadSection(section) {
  content.classList.add("fade-out");

  setTimeout(() => {
    content.innerHTML = sections[section] || home;
    content.classList.remove("fade-out");
    content.classList.add("fade-in");

    // 👇 lógica especial para portfolio
    if (section === "portfolio") {
      const cards = content.querySelectorAll(".portfolio-card");

      cards.forEach(card => {
        card.addEventListener("click", () => {
          // cerrar todas las demás
          cards.forEach(c => {
            if (c !== card) c.classList.remove("active");
          });

          // toggle solo en la tarjeta clickeada
          card.classList.toggle("active");
        });
      });
    }

    setTimeout(() => content.classList.remove("fade-in"), 500);
  }, 300);
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    loadSection(e.target.dataset.section);
  });
});






// Cargar Home al inicio
loadSection("home");
