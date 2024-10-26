// const TILE_LAYER = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// const ZOOM = 17;
// const objectCoordinate = {
//   lat: 59.938827,
//   lng: 30.323080,
// };
// const startCoordinate = {
//   lat: 59.938827,
//   lng: 30.320580,
// };
// const iconConfig = {
//   url: './images/map-pin-tablet.png',
//   width: 113,
//   height: 106,
//   anchorX: 56.5,
//   anchorY: 53,
// };

const siteList = document.querySelector('.main-nav__list');
const navBurger = document.querySelector('.main-nav__burger');
const navMain = document.querySelector('.main-nav');
const slider = document.querySelector('.slider');
let control;
let sliderStyles;
let controlPlaceStart;
let clientX;

// const map = L.map('map').setView(startCoordinate, ZOOM);
// L.tileLayer(TILE_LAYER, {
//   attribution: COPYRIGHT
// }).addTo(map);

// const mainPinIcon = L.icon({
//   iconUrl: iconConfig.url,
//   iconSize: [iconConfig.width, iconConfig.height],
//   iconAnchor: [iconConfig.anchorX, iconConfig.anchorY],
// });

// const mainPinMarker = L.marker(objectCoordinate, {
//   icon: mainPinIcon,
// });

// mainPinMarker.addTo(map);

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
    window.addEventListener('touchend', stopTheControlShifting);
    control.addEventListener('touchstart', startTheControlShifting);
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
