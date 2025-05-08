// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
//   document.body.style.overflow = "hidden";
// }

// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
//   document.body.style.overflow = "";
// }

function openNav() {
  // const overlay = document.getElementById("myNav");
  // overlay.style.display = "block";
  // overlay.style.opacity = "1";
  // document.body.style.overflow = "hidden";

  const overlay = document.getElementById("myNav");
  overlay.style.display = "block";
  setTimeout(() => {
    overlay.style.opacity = "1";
  }, 10);
  document.body.style.overflow = "hidden";
}

function closeNav() {
  const overlay = document.getElementById("myNav");
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  }, 500);
}

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".l-parallax-image");
  parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
});

var burger = document.querySelector(".header-burger");
var menu = document.querySelector(".header-menu");
var closeBtn = document.querySelector(".close-menu");

var toggleMenu = function () {
  menu.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);

if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    menu.classList.remove("is-active");
  });
}
document.addEventListener("click", function (event) {
  var isClickInsideMenu = menu.contains(event.target);
  var isClickOnBurger = burger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnBurger) {
    menu.classList.remove("is-active");
  }
});
