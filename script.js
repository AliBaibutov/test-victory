var swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    361: {
      slidesPerView: 3,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        type: "none",
      },
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  slidesPerView: 1,
  spaceBetween: 20,
});

var swiper = new Swiper(".swiper-specialist", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  slidesPerView: 1,
  spaceBetween: 20,
});
