let swiper = new Swiper(".home-swiper", {
  spaceBetween: 400,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    clickable: true,
  },
  loop: true,
  slidesPerView: "auto",
});
