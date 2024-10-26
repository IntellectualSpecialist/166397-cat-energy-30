const siteList = document.querySelector('.main-nav__list');
const navBurger = document.querySelector('.main-nav__burger');
const navMain = document.querySelector('.main-nav');
const slider = document.querySelector('.slider');
let control;
let sliderStyles;
let controlPlaceStart;
let clientX;

siteList.classList.add('main-nav__list--closed');
navBurger.classList.remove('main-nav__burger--active');
navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', () => {
  if (siteList.classList.contains('main-nav__list--closed')) {
    siteList.classList.remove('main-nav__list--closed');
    navBurger.classList.add('main-nav__burger--active');
  } else {
    siteList.classList.add('main-nav__list--closed');
    navBurger.classList.remove('main-nav__burger--active');
  }
});

if (slider) {
  control = slider.querySelector('.slider__control');
  sliderStyles = getComputedStyle(control);
}

function initSlider () {
  if (slider) {
    window.addEventListener('pointerup', stopTheControlShifting);
    control.addEventListener('pointerdown', startTheControlShifting);
  }
}

function startTheControlShifting (event) {
  controlPlaceStart = parseInt(sliderStyles.getPropertyValue('--left'), 10);
  clientX = event.clientX;
  window.addEventListener('pointermove', shiftТheСurtain);
}

function shiftТheСurtain (event) {
  const deltaX = event.clientX - clientX;
  const cursorPlace = controlPlaceStart / 100 + deltaX / slider.clientWidth;
  const controlPlace = Math.min(Math.max(cursorPlace, 0), 1);
  control.style.setProperty('--left', `${controlPlace * 100}%`);
  slider.style.setProperty('--persent', `${controlPlace * 100}%`);
}

function stopTheControlShifting () {
  window.removeEventListener('pointermove', shiftТheСurtain);
}

initSlider();
