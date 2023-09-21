const MAP_OPTIONS = {
  center: [55.385044, 82.486671],
  zoom: 15,
  scrollWheelZoom: false,
};

// eslint-disable-next-line
const LAYER = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
});

const ICON_OPTIONS = {
  desktop: {
    iconUrl: 'img/svg/pin.svg',
    iconSize: [70, 70],
  },

  tablet: {
    iconUrl: 'img/svg/pin.svg',
    iconSize: [40, 40],
  },

  mobile: {
    iconUrl: 'img/svg/pin.svg',
    iconSize: [24, 24],
  },
};

let map;

const initMap = () => {
  let pinOptions;
  if (window.innerWidth <= 1200) {
    if (window.innerWidth <= 768) {
      pinOptions = ICON_OPTIONS.mobile;
    } else {
      pinOptions = ICON_OPTIONS.tablet;
    }
  } else {
    pinOptions = ICON_OPTIONS.desktop;
  }
  // eslint-disable-next-line
  map = new L.map('map', MAP_OPTIONS);
  map.setView([55.02871595978264, 82.92825728618725], 14);
  LAYER.addTo(map);
  // eslint-disable-next-line
  let pin = L.icon(pinOptions);
  // eslint-disable-next-line
  let marker = new L.Marker([55.02871595978264, 82.92825728618725], {icon: pin});
  marker.addTo(map);
};


const onWindowResize = () => {
  map.remove();
  initMap();
};

const setWindowResize = () => {
  window.addEventListener('resize', onWindowResize);
};

export {initMap, setWindowResize};
