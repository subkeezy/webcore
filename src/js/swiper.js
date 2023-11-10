
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
      enabled: true,
    },
    360: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 16,
    
    },
    450: {
      slidesPerView: 1.7,
      spaceBetween: 16,
    
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 32,
    
    },
    530: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    
    },
    620: {
      slidesPerView: 2.5,
      spaceBetween: 32,
    
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 32,
    
    },
    768: {
      slidesPerView: 11,
      spaceBetween: 0,
      
    },
  },
});

