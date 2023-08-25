(function(){
  const partners = new Swiper('.partners-slider__container', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 40,
    //loop: true,
    //autoplay: {
    //  delay: 5000,
    //},
    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 48,
      },
      1280: {
        slidesPerView: 'auto',
        spaceBetween: 56,
      }
    },
  });
}());
