import {ScrollLock} from '../utils/scroll-lock';
const nav = document.querySelector('[data-id="nav"]');
const toggle = document.querySelector('[data-id="toggle"]');
const wrapper = document.querySelector('[data-id="menu-wrapper"]');
const listItems = document.querySelectorAll('.page-header__menu-item');
const subMenuButtons = document.querySelectorAll('.page-header__submenu-button');
const subMenuItems = document.querySelectorAll('.page-header__submenu-item');
const closedClass = 'is-closed';
const openedClass = 'is-opened';

const isEscapeKey = (evt) => evt.key === 'Escape';
window.scrollLock = new ScrollLock();

const onDocumentEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMenu();
  }
};

const onDocumentClick = () => {
  document.addEventListener('click', (evt) => {
    const click = evt.composedPath().includes(wrapper);
    if (!click && nav.classList.contains(openedClass)) {
      closeMenu();
    }
  });
};

function openMenu() {
  nav.classList.remove(closedClass);
  nav.classList.add(openedClass);
  toggle.classList.remove(closedClass);
  toggle.classList.add(openedClass);
  window.scrollLock.disableScrolling();
  document.addEventListener('keydown', onDocumentEscapeKeydown);
  document.addEventListener('click', onDocumentClick);
}

function closeMenu() {
  nav.classList.add(closedClass);
  nav.classList.remove(openedClass);
  toggle.classList.add(closedClass);
  toggle.classList.remove(openedClass);
  window.scrollLock.enableScrolling();
  document.removeEventListener('keydown', onDocumentEscapeKeydown);
  document.removeEventListener('click', onDocumentClick);
}

const toggleMenu = () => {
  if (document.body.contains(document.querySelector('.page-header'))) {
    toggle.addEventListener('click', () => {
      if (nav.classList.contains(closedClass)) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }
};

const toggleSubMenu = () => {
  if (document.body.contains(document.querySelector('.page-header__submenu'))) {
    subMenuButtons.forEach((subMenuButton) => subMenuButton.addEventListener('click', (evt) => {
      if (evt) {
        const subMenu = subMenuButton.parentElement;
        if (subMenu.classList.contains(closedClass)) {
          subMenu.classList.remove(closedClass);
          subMenu.classList.add(openedClass);
        } else {
          subMenu.classList.add(closedClass);
          subMenu.classList.remove(openedClass);
        }
      }
    }));
  }
};


const setMenuItemsListeners = () => {
  listItems.forEach((listItem) => listItem.addEventListener('click', (evt) => {
    if (evt) {
      if (nav.classList.contains(openedClass)) {
        closeMenu();
      }
    }
  }));

  subMenuItems.forEach((subMenuItem) => subMenuItem.addEventListener('click', () => {
    if (nav.classList.contains(openedClass)) {
      closeMenu();
    }
  }));
};


const initMenu = () => {
  nav.classList.remove('page-header__nav--nojs');
  toggleMenu();
  toggleSubMenu();
  setMenuItemsListeners();
};

export {initMenu};
