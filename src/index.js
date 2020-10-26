import "ol/ol.css";

import Map from "ol/Map";
import View from "ol/View";
import Tile from "ol/layer/Tile";
import OSMSource from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { initializeMapNotes } from "./modules/mapnotes";

const map = new Map({
  target: "map",
  view: new View({
    zoom: 3,
    center: fromLonLat([-73.60791683207303, -15.595145902766419]),
  }),
  layers: [new Tile({ source: new OSMSource() })],
});

initializeMapNotes({
  map,
  notesManagerTargetId: "mapnotes-manager",
  activeNoteTargetId: "mapnotes-active-note",
});
