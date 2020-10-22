// use the reference below to access the respective attributes for each element
// notice how we "namespace" the ids ("mapnotes-") so they are all easily identifable as part of this "mapnotes feature"
// ensures names are unique relative to other elements in the document
// can be utilized by other modules / components that need access to the ids

export const MAP_NOTES_CONTAINER_ID =
  process.env.MAP_NOTES_CONTAINER_ID || "mapnotes-container";

export const MAP_NOTES_CONTAINER = document.querySelector(
  MAP_NOTES_CONTAINER_ID
);

export const ACTIVE_NOTE_ID = "mapnotes-active-note";
export const ACTIVE_NOTE_CONTAINER = document.querySelector(ACTIVE_NOTE_ID);

export const NOTE_VIEWER_IDs = {
  noteViewerId: "mapnotes-note-viewer",
  titleHeaderId: "mapnotes-note-viewer-title",
  bodyParagraphId: "mapnotes-note-viewer-body",
  deleteNoteButtonId: "mapnotes-note-viewer-delete",
  loadFeaturesButtonId: "mapnotes-note-viewer-load-features",
};

export const NEW_NOTE_FORM_IDs = {
  newNoteFormId: "mapnotes-new-note-form",
  bodyInputId: "mapnotes-new-note-form-body",
  titleInputId: "mapnotes-new-note-form-title",
  saveNoteButtonId: "mapnotes-new-note-form-save",
  drawFeaturesButtonId: "mapnotes-new-note-form-draw-features",
};

export const NOTES_MANAGER_IDs = {
  notesManagerFormId: "mapnotes-notes-manager",
  createNoteButtonId: "mapnotes-notes-manager-create",
  noteSelectorId: "mapnotes-notes-manager-note-selector",
};
