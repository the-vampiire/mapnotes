// this file serves as the entrypoint to the MapNotes module
// just like src/index.js it should provide a high-level overview of what MapNotes is doing
// in src/index.js the call to initializeMapNotes indicates to the reader that there is some entrypoint setup involving the map that has been abstracted behind the MapNotes module
// they can then refer to the module's entrypoint (this file) for more details
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import Context from "./context";
import API, { DEFAULT_MAP_NOTES_API_URL } from "./api";

import {
  NewNoteForm,
  NoteSelector,
  NotesManager,
  DOMConstants,
} from "./dom-components";

import {
  saveNote,
  drawFeatures,
  renderNoteViewer,
  renderNewNoteForm,
} from "./event-handlers";

/**
 * @typedef {Object} MapNotesConfig
 * @property {import('ol/src/Map').default} map target OpenLayers map
 * @property {string} [mapNotesApiUrl] URL of the MapNotes API
 * @property {string} [activeNoteTargetId] ID of the element target to render the active MapNote
 * @property {string} [notesManagerTargetId] ID of the element target to render the MapNotes manager
 *
 */

/**
 * Asynchronously initializes the MapNotes utility
 * - requires a DOM target for the MapNotes manager to render within
 * - requires a DOM target for the MapNotes active note to render within
 *
 * @param {MapNotesConfig} mapNotesConfig
 *
 * @example initializing MapNotes
 *
 * const map = new Map({ ... });
 * initializeMapNotes({ map, ... }).catch(initializtionError => console.error(initializationError));
 */
const initializeMapNotes = async ({
  map,
  mapNotesApiUrl = DEFAULT_MAP_NOTES_API_URL,
  activeNoteTargetId = DOMConstants.DEFAULT_ACTIVE_NOTE_TARGET_ID,
  notesManagerTargetId = DOMConstants.DEFAULT_NOTES_MANAGER_TARGET_ID,
}) => {
  const activeNoteTarget = document.getElementById(activeNoteTargetId);
  const notesManagerTarget = document.getElementById(notesManagerTargetId);

  if (!activeNoteTarget) {
    throw new Error(
      `MapNotes: could not find active note target with id [${activeNoteTargetId}]`
    );
  } else if (!notesManagerTarget) {
    throw new Error(
      `MapNotes: could not find notes manager target with id [${notesManagerTargetId}]`
    );
  }

  // get MapNotes
  const mapNotes = await API.getMapNotes();

  // build the NotesManager component and append it to its target
  const noteSelector = NoteSelector.buildNoteSelector(mapNotes, {
    noteSelectHandler: renderNoteViewer,
  });

  const notesManager = NotesManager.buildNotesManager({
    noteSelector,
    createNoteButtonClickHandler: renderNewNoteForm,
  });

  notesManagerTarget.append(notesManager);

  // NewNoteForm is appended only when a user clicks the create note button
  const newNoteForm = NewNoteForm.buildNewNoteForm({
    saveNoteButtonClickHandler: saveNote,
    drawFeaturesButtonClickHandler: drawFeatures,
  });

  // instantiate the editable vector source and layer
  const editableSource = new VectorSource();
  const editableLayer = new VectorLayer({ source: editableSource });

  // makes them accessible in other modules that use them by:
  // importing the Context module and calling Context.getContext()
  Context.addContext({
    map,
    newNoteForm,
    editableLayer,
    editableSource,
    mapNotesApiUrl,
    activeNoteTarget,
    activeNoteTargetId,
  });
};

export { initializeMapNotes };
