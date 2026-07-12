// Booking link: paste Brielle's Goldie booking URL between the quotes below
// (e.g. "https://booking.heygoldie.com/nails-by-brielle") and every
// "Book Now" button across the site will point to it automatically.
// Leave it empty to keep the "text to book" fallback.
const BOOKING_URL = "";

// Instagram: paste her profile URL between the quotes below
// (e.g. "https://www.instagram.com/nailsbybrielle") and every Instagram
// link on the site will point to it automatically.
const INSTAGRAM_URL = "";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  if (BOOKING_URL) {
    document.querySelectorAll(".book-btn").forEach((a) => {
      a.href = BOOKING_URL;
      a.target = "_blank";
      a.rel = "noopener";
    });
  }

  if (INSTAGRAM_URL) {
    document.querySelectorAll(".insta-link").forEach((a) => {
      a.href = INSTAGRAM_URL;
    });
  }
});
