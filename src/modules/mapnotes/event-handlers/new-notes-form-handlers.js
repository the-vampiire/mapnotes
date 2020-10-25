import { Draw, Snap } from "ol/src/interaction";
import Context from "../context";

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
function drawFeatures(clickEvent) {
  const { map, editableSource } = Context.getContext();
  // TODO: abstract EditableLayer class
  // getsource, enable(), disable() abstractions
  map.addInteraction(new Snap({ source: editableSource }));
  map.addInteraction(new Draw({ source: editableSource, type: "Polygon" }));
}

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
function saveNote(clickEvent) {
  console.log("save note clicked");
  const { editableSource } = Context.getContext();
  console.log(editableSource.getFeatures());
}

export { saveNote, drawFeatures };
