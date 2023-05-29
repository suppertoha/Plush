import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const bodyElement = document.querySelector('body');

function hasDisableScrollClass() {
  return bodyElement.classList.contains('.search__button ');
}

function toggleBodyScrollLock() {
  if (hasDisableScrollClass()) {
    disableBodyScroll(bodyElement);
  } else {
    enableBodyScroll(bodyElement);
  }
}

bodyElement.addEventListener('transitionend', toggleBodyScrollLock);
