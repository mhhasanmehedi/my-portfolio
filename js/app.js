// navbar menu
const navMenu = document.getElementsByClassName("nav__menu");
const navLink = document.getElementsByClassName("nav-link");
for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// blog swiper
var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 1,
  autoHeight: true,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});
