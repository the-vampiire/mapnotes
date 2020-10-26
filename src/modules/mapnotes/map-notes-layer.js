import VectorSource from "ol/src/source/Vector";

const { Vector } = require("ol/layer");
const { Draw, Snap } = require("ol/src/interaction");

/**
 * @typedef {Object} MapNotesLayerConfig
 * @property {import('ol/src/Map').default} map
 * @property {import('ol/layer/Vector').default} editableLayer
 */

/**
 * Layer manager for capturing and loading MapNote features
 * @param {MapNotesLayerConfig} mapNotesLayerConfig
 */
function MapNotesLayer({ map, editableLayer }) {
  let editableSource = editableLayer && editableLayer.getSource();

  if (!editableSource) {
    editableSource = new VectorSource();
    const vectorLayer = new Vector();

    vectorLayer.setSource(editableSource);
    map.addLayer(vectorLayer);
  }

  const snapInteraction = new Snap({ source: editableSource });
  const drawInteraction = new Draw({ source: editableSource, type: "Polygon" });

  const interactions = [snapInteraction, drawInteraction];

  this.getDrawnFeatures = () => editableSource.getFeatures();

  this.clearDrawnFeatures = () => editableSource.clear();

  this.renderFeatures = (geoJsonFeatures) =>
    editableSource.addFeatures(geoJsonFeatures);

  this.enableDrawing = () =>
    interactions.forEach((interaction) => map.addInteraction(interaction));

  this.disableDrawing = () =>
    interactions.forEach((interaction) => map.addInteraction(interaction));
}

export default MapNotesLayer;
