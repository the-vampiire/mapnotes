import { NOTES_MANAGER_IDs } from "../dom-constants";
import { buildButton } from "../generic-components";

/**
 * produces the following HTML:
<form id="mapnotes-notes-manager">
  <!-- note selector is its own component (NoteSelector) -->
  <select name="" id="mapnotes-notes-manager-note-selector">
    <option value="">Select a Note</option>
  </select>

  <button id="mapnotes-notes-manager-create"></button>
</form>
 */

const { newNoteButtonId, notesManagerFormId } = NOTES_MANAGER_IDs;

/**
 * Builds a NotesManager container component
 * - created when: the DOM has loaded
 * - rendered in: the MapNotes container (a sibling to the ActiveNote container)
 *
 * Contains:
 * - NoteSelector: for selecting an existing MapNote to view (as NoteView component)
 * - create note button: for initiating the new MapNote creation process (using the NewNoteForm component)
 *
 * @param {Object} notesManagerConfig
 * @param {HTMLSelectElement} notesManagerConfig.noteSelector the NoteSelector component
 * @param {(clickEvent: Event) => void} notesManagerConfig.createNoteButtonClickHandler event handler for when the create note button is clicked
 * @returns {HTMLFormElement} a NotesManager component
 *
 * @example
 *
 * ```js
 * const notesManager = buildsNotesManager({
 *   noteSelector: buildNoteSelector(mapNotes, {
 *     noteSelectHandler: (selectChangeEvent) => {},
 *   }),
 *   drawFeaturesButtonClickHandler: (clickEvent) => {},
 * });
 * ```
 */
const buildNotesManager = (notesManagerConfig) => {
  const { noteSelector, createNoteButtonClickHandler } = notesManagerConfig;

  const newNoteButton = null;

  const notesManager = null;

  return notesManager;
};

export { buildNotesManager };
