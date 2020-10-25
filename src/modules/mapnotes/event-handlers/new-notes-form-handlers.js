import { GeoJSON } from "ol/format";
import { Draw, Snap } from "ol/src/interaction";

import API from "../api";
import Context from "../context";
import { DOMConstants, NoteSelector } from "../dom-components";

/**
 * Enables drawing features related to the MapNote note button handler of the active NewNoteForm component
 * - used when: the NewNoteForm draw features button is clicked
 *
 * behavior:
 * - sends a request to the MapNotes API to save the new MapNote
 * - sends a request to the MapNotes API to save the new MapNote's related features
 * - updates the NoteSelector by adding a NoteOption (@see NoteSelector.addNoteOption)
 *
 * MapNote payload: { title, body } (using the NewNoteForm title and body input values)
 * Features payload: GeoJSON feature collection (using the features from the editable source)
 *
 * @param {Event} clickEvent click event of the save note button
 */
const drawFeatures = (clickEvent) => {
  const { map, editableSource } = Context.getContext();
  // TODO: abstract EditableLayer class
  // getsource, enable(), disable() abstractions
  map.addInteraction(new Snap({ source: editableSource }));
  map.addInteraction(new Draw({ source: editableSource, type: "Polygon" }));
};

/**
 * Saves a MapNote and its related features
 * - used when: the NewNoteForm save button is clicked
 *
 * behavior:
 * - sends a request to the MapNotes API to save the new MapNote
 * - sends a request to the MapNotes API to save the new MapNote's related features
 * - clears the title and body inputs of the form
 * - updates the NoteSelector by adding a NoteOption (@see NoteSelector.addNoteOption)
 *
 * MapNote payload: { title, body } (using the NewNoteForm title and body input values)
 * Features payload: GeoJSON feature collection (using the features from the editable source)
 *
 * @param {Event} clickEvent click event of the save note button
 */
const saveNote = async (clickEvent) => {
  const { map, editableSource } = Context.getContext();
  // disable interaction
  // TODO: encapsulate editable layer with methods (enable, disable, getSource, getLayer)
  // TODO: remove from context

  const titleInput = document.getElementById(
    DOMConstants.NEW_NOTE_FORM_IDs.titleInputId
  );

  const bodyInput = document.getElementById(
    DOMConstants.NEW_NOTE_FORM_IDs.bodyInputId
  );

  // transfer data
  const mapNotePayload = { title: titleInput.value, body: bodyInput.value };
  const mapNote = await API.createMapNote(mapNotePayload);

  const features = editableSource.getFeatures();
  const featuresPayload = new GeoJSON().writeFeatures(features);
  await API.updateMapNoteFeatures(mapNote.id, featuresPayload);

  // synchronize UI
  bodyInput.value = "";
  titleInput.value = "";
  const noteSelector = document.getElementById(
    DOMConstants.NOTES_MANAGER_IDs.noteSelectorId
  );
  NoteSelector.addNoteOption(noteSelector, mapNote);
};

export { saveNote, drawFeatures };
