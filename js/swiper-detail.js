const swiperProduct = new Swiper('.swiper-container-product-detail', {
    slidesPerView: 5,
    spaceBetween: 3,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        540: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        965: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1288: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1624: {
          slidesPerView: 7,
          spaceBetween: 30,
        }
      },
});