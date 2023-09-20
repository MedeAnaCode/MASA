import Swiper from '../vendor/swiper.js';

const initNewsSwiper = () => {
  if (document.body.contains(document.querySelector('.news__slider'))) {
    // eslint-disable-next-line no-new
    new Swiper('.news__slider', {
      loop: false,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          allowTouchMove: true,
          grid: {
            rows: 2,
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          allowTouchMove: true,
          grid: {
            rows: 2,
          },
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },

      navigation: {
        nextEl: '.news__slider-button--next',
        prevEl: '.news__slider-button--prev',
        disabledClass: 'slider-button--disabled',
      },

      pagination: {
        el: '.news__pagination',
        clickable: true,
        bulletClass: 'news__pagination-bullet',
        bulletActiveClass: 'news__pagination-bullet--active',
        renderBullet: (index, className) => {
          return '<button class="' + className + '">' + (index + 1) + '</button>';
        },
      },
    });
  }
};

export {initNewsSwiper};
