import Swiper from '../vendor/swiper.js';

const initFeedbacksSwiper = () => {
  if (document.body.contains(document.querySelector('.feedbacks__slider'))) {
    // eslint-disable-next-line no-new
    new Swiper('.feedbacks__slider', {
      scrollbar: {
        el: '.feedbacks__scrollbar',
        draggable: true,
        dragSize: 392,
        hide: false,
      },

      navigation: {
        nextEl: '.feedbacks__slider-button--next',
        prevEl: '.feedbacks__slider-button--prev',
        disabledClass: 'slider-button--disabled',
      },

      breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          scrollbar: {
            dragSize: 324,
          },
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          scrollbar: {
            el: '',
            enabled: false,
          },
        },
      },
    });
  }
};

export {initFeedbacksSwiper};
