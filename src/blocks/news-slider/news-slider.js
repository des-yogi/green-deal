(function(){
  const swiper = new Swiper('.news-slider__container', {
    speed: 400,
    spaceBetween: 40,
     breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 32
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
}());
