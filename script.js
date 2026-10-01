// ==========================================
// HAMSAB DIGITAL SOLUTIONS - JAVASCRIPT
// ==========================================

// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const business = document.getElementById("business").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
      alert("Please fill in your name, phone number and message.");
      return;
    }

    const whatsappNumber = "2347047240901";

    const whatsappMessage =
      `Hello HAMSAB Digital Solutions,%0A%0A` +
      `I would like to make an enquiry.%0A%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Business: ${encodeURIComponent(business || "Not provided")}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A` +
      `Service Needed: ${encodeURIComponent(service || "Not specified")}%0A%0A` +
      `Message:%0A${encodeURIComponent(message)}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();
  });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// ==========================================
// CURRENT YEAR IN FOOTER
// ==========================================

const yearElement = document.getElementById("currentYear");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ==========================================
// MOBILE MENU
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");

    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");

      menuToggle.textContent = "☰";
    });
  });
}
