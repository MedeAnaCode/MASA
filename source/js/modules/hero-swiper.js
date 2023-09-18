const initHeroSwiper = () => {
  if (document.body.contains(document.querySelector('.hero-block__slider'))) {
    // eslint-disable-next-line no-new
    new Swiper('.hero-block__slider', {
      loop: true,
      pagination: {
        el: '.hero-block__pagination',
        type: 'bullets',
        clickable: true,
        bulletActiveClass: 'hero-block__pagination-bullet--active',
        bulletClass: 'hero-block__pagination-bullet',
      },

      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },

      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
    });
  }
};

export {initHeroSwiper};
