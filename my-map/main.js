import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'; 

const newCenterCoor = [-120.6596, 35.2828]

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: fromLonLat(newCenterCoor),
    zoom: 10
  })
  
  //map.getView().setCenter(newCenterCoor);

});
