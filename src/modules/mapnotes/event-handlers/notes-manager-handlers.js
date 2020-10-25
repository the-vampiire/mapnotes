import Context from "../context";

/**
 * Renders a NewNoteForm component
 * - used when: the create note button of the NotesManager component is clicked
 *
 * behavior:
 * - ActiveNote is empty: appends the NewNoteForm component to the ActiveNote container
 * - ActiveNote is not empty: replaces the ActiveNote child with the NewNoteForm component
 *
 * @param {Event} clickEvent click event of the create note button
 */
function renderNewNoteForm(clickEvent) {
  console.log("renderNewNoteForm clicked");
}

/**
 * Renders a NoteViewer component for the selected MapNote
 * - used when: a MapNote is selected in the NoteSelector component
 *
 * behavior:
 * - sends a request to the MapNotes API to retrieve the data for the selected MapNote
 * - creates a NoteViewer component (@see NoteViewer.buildNoteViewer) using the MapNote retrieved from the API
 * - ActiveNote is empty: appends the NoteViewer component to the ActiveNote container
 * - ActiveNote is not empty: replaces the ActiveNote child element with the NoteViewer component
 *
 * @param {Event} changeEvent change event of the NoteSelector component's underlying <selector> element
 */
function renderNoteViewer(changeEvent) {
  console.log("renderNoteViewer clicked");
}

export { renderNoteViewer, renderNewNoteForm };
