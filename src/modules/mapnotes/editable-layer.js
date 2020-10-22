import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

// empty source (features are added by the user)
const editableSource = new VectorSource({});

// independent layer just for editing
const editableLayer = new VectorLayer({ source: editableSource });

export { editableLayer, editableSource };
