import { NEW_NOTE_FORM_IDs } from "./dom-constants";
import { buildInput, buildButton } from "./generic-components";

/**
 * produces the following HTML
<form id="mapnotes-new-note-form">
  <label for="mapnotes-new-note-form-title">
    Note Title
    <input type="text" id="mapnotes-new-note-form-title" />
  </label>

  <label for="mapnotes-new-note-form-body">
    Note Body
    <textarea id="mapnotes-new-note-form-body" />
  </label>

  <button id="mapnotes-new-note-form-draw-features">Draw Features</button>
  <button id="mapnotes-new-note-form-save">Save Note</button>
</form>
 */

const {
  bodyInputId,
  titleInputId,
  newNoteFormId,
  saveNoteButtonId,
  drawFeaturesButtonId,
} = NEW_NOTE_FORM_IDs;

/**
 * Builds a NewNoteForm component for a user to create a new MapNote
 * - created when: a user clicks the create note button in the NotesManager component
 * - rendered in: the ActiveNote container (replacing anything in the container)
 *
 * @param {Object} newNoteFormConfig
 * @param {(clickEvent: Event) => void} newNoteFormConfig.saveNoteButtonClickHandler event handler for when the save note button is clicked
 * @param {(clickEvent: Event) => void} newNoteFormConfig.drawFeaturesButtonClickHandler event handler for when the draw features button is clicked
 * @returns {HTMLFormElement} a NewNoteForm component
 *
 * @example
 *
 * ```js
 * const newNoteForm = buildNewNoteForm({
 *  saveNoteButtonClickHandler: (clickEvent) => { ... },
 *  drawFeaturesButtonClickHandler: (clickEvent) => { ... },
 * });
 * ```
 */
const buildNewNoteForm = (newNoteFormConfig) => {
  const {
    saveNoteButtonClickHandler,
    drawFeaturesButtonClickHandler,
  } = newNoteFormConfig;

  const noteBodyInput = null;
  const noteTitleInput = null;
  const saveNoteButton = null;
  const drawFeaturesButton = null;

  const newNoteForm = null;

  return newNoteForm;
};

export { buildNewNoteForm };
