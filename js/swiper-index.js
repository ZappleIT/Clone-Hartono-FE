const swiperBannerHero = new Swiper('.swiper-container-hero', {
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperProduct = new Swiper('.swiper-container-product', {
  slidesPerView: 4,
  spaceBetween: 3,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },     
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
    965: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1288: {
      slidesPerView: 5,
      spaceBetween: 15,
    },
    1624: {
      slidesPerView: 6,
      spaceBetween: 25,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


