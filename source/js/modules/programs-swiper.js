import Swiper from '../vendor/swiper.js';

const initProgramsSwiper = () => {
  if (document.body.contains(document.querySelector('.programs__slider'))) {
    // eslint-disable-next-line no-new
    new Swiper('.programs__slider', {
      scrollbar: {
        el: '.programs__scrollbar',
        draggable: true,
        dragSize: 392,
        hide: false,
      },

      navigation: {
        nextEl: '.programs__slider-button--next',
        prevEl: '.programs__slider-button--prev',
        disabledClass: 'slider-button--disabled',
      },

      breakpoints: {
        1260: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 'auto',
          scrollbar: {
            dragSize: 324,
          },
        },
        320: {
          slidesPerView: 1,
          scrollbar: {
            el: '',
            enabled: false,
          },
        },
      },
    });
  }
};

export {initProgramsSwiper};
