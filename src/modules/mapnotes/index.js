// this file serves as the entrypoint to the MapNotes module
// just like src/index.js it should provide a high-level overview of what MapNotes is doing
// in src/index.js the call to initializeMapNotes indicates to the reader that there is some entrypoint setup involving the map that has been abstracted behind the MapNotes module
// they can then refer to the module's entrypoint (this file) for more details
import { Draw, Snap } from "ol/interaction";

import { editableLayer, editableSource } from "./editable-layer";
import { NoteSelector, NotesManager, DOMConstants } from "./dom-components";
import {
  handleSaveNote,
  handleDeleteNote,
  handleCreateNote,
  handleSelectNote,
  handleLoadFeatures,
  handleDrawFeatures,
} from "./event-handlers";

const { MAP_NOTES_CONTAINER, ACTIVE_NOTE_CONTAINER } = DOMConstants;

/**
 * @typedef {import('ol/src/Map').default} Map
 */

/**
 * @throws if DOM content has not loaded before initializing MapNotes
 *
 * @param {Object} mapNotesConfig
 * @param {Map} mapNotesConfig.map OpenLayers Map object to integrate with
 */
const initializeMapNotes = ({ map }) => {
  // add the notes manager (and its children) to the ActiveNote container
  const noteSelector = null;
  const notesManager = null;

  // add the ActiveNote container to the MapNotes container

  // add the Draw and Snap interactions to the map
};

export { initializeMapNotes };
