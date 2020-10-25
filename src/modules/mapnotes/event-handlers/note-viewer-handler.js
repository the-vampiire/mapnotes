import Context from "../context";

/**
 * Loads the features associated with the active MapNote
 * - used when: the active NoteViewer load features button is clicked
 *
 * behavior:
 * - clears the features of the editable source
 * - adds the associated features to the editable source
 *
 * @param {Event} clickEvent click event of the load features button
 */
function loadFeatures(clickEvent) {
  // the MapNote's ID is available as the load features button's (event target) value attribute
}

/**
 * Delete note button handler of the active NoteViewer component
 * - used when: the active NoteViewer delete note button is clicked
 *
 * behavior:
 * - sends a request to the MapNotes API to delete the active MapNote
 * - updates the NoteSelector by removing the corresponding NoteOption (@see NoteSelector.removeNoteOption)
 *
 *
 * @param {Event} clickEvent click event of the delete note button
 *
 */
function deleteNote(clickEvent) {
  // the MapNote's ID is available as the delete button's (event target) value attribute
}

export { deleteNote, loadFeatures };
