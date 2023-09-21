import {iosVhFix} from './utils/ios-vh-fix.js';
import {initModals} from './modules/modals/init-modals.js';
import {Form} from './modules/form-validate/form.js';
import {initMenu} from './modules/menu.js';
import {initHeroSwiper} from './modules/hero-swiper.js';
import {initProgramsSwiper} from './modules/programs-swiper.js';
import {initFeedbacksSwiper} from './modules/feedbacks-swiper.js';
import {initNewsSwiper} from './modules/news-swiper.js';
import {CustomSelect} from './modules/select/custom-select.js';
import {initAccordions} from './vendor/init-accordion.js';
import {initMap, setWindowResize} from './modules/map.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initMenu();
  initHeroSwiper();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initProgramsSwiper();
    initFeedbacksSwiper();
    initNewsSwiper();
    initAccordions();
    const customSelect = new CustomSelect();
    customSelect.init();
    initMap();
    setWindowResize();
    initModals();
    const form = new Form();
    form.init();
    window.form = form;
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
