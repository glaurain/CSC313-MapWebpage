import './style.css';
import Feature from 'ol/Feature.js';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { Style, Fill, Stroke, Circle as CircleStyle } from 'ol/style.js';
import { Vector as VectorSource } from 'ol/source.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import Point from 'ol/geom/Point.js';
// map centering from stackOverflow
const newCenterCoor = [-120.6596, 35.2828];

// new features for the three icons
const locations = [
  { name: 'Santa Maria', coords: [-120.4357, 34.9530] },
  { name: 'Los Alamitos', coords: [-118.0719, 33.8032] },
  { name: 'San Francisco', coords: [-122.4194, 37.7749] },
];
//from OpenLayers
const iconFeatures = locations.map(location => {
  const feature = new Feature({
    geometry: new Point(fromLonLat(location.coords)),
    name: location.name,
  });
// circle code for the icons instead of png file
  feature.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 7, //circle radius
        fill: new Fill({ color: 'rgba(255, 0, 0, 0.6)' }), 
        stroke: new Stroke({
          color: 'rgba(0, 0, 0, 0.8)', //black border
          width: 1,
        }),
      }),
    })
  );

  return feature;
});

// Code from OpenLayers site
const vectorSource = new VectorSource({
  features: iconFeatures,
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const rasterLayer = new TileLayer({
  source: new OSM(),
});

const map = new Map({
  target: 'map',
  layers: [rasterLayer, vectorLayer],
  view: new View({
    center: fromLonLat(newCenterCoor),
    zoom: 7,
  }),
});