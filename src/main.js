function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// ---
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".l-parallax-image");
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});
// ----
const carousel = document.getElementById("carousel");

let scrollSpeed = 1; // pixels per frame
let scrollInterval;

function startAutoScroll() {
  scrollInterval = setInterval(() => {
    carousel.scrollLeft += scrollSpeed;

    // Loop back to start when it reaches the end
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
      carousel.scrollLeft = 0;
    }
  }, 20); // adjust for speed (lower = smoother/slower)
}

function stopAutoScroll() {
  clearInterval(scrollInterval);
}

// Start scrolling on page load
window.addEventListener("load", startAutoScroll);

// Optional: pause scroll on hover
carousel.addEventListener("mouseenter", stopAutoScroll);
carousel.addEventListener("mouseleave", startAutoScroll);
