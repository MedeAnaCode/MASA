const buttonsList = document.querySelector('.news__buttons-list');
const buttons = document.querySelectorAll('.news__button');
const ACTIVE_CLASS = 'news__button--active';

const onButtonsListClick = (evt) => {
  const currentButton = evt.target.closest('.news__button');
  if (!currentButton.classList.contains(ACTIVE_CLASS)) {
    buttons.forEach((button) => button.classList.remove(ACTIVE_CLASS));
    currentButton.classList.add(ACTIVE_CLASS);
  }
};

const initNewsButtons = () => {
  buttonsList.addEventListener('click', (evt) => onButtonsListClick(evt));
};

export {initNewsButtons};
