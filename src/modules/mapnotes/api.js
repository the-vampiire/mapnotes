import MockDB from "./api.mock"; // TEMPORARY MOCK

import Context from "./context";

export const DEFAULT_MAP_NOTES_API_URL = process.env.MAP_NOTES_API_URL;

const { mapNotesApiUrl } = Context.getContext();

const getMapNotes = async () => MockDB.findMapNotes();

const getMapNote = async (noteId) => MockDB.findMapNote(noteId);

const createMapNote = async (newMapNote) => MockDB.saveMapNote(newMapNote);

const deleteMapNote = async (noteId) => MockDB.removeMapNote(noteId);

const updateMapNoteFeatures = async (noteId, geoJsonFeatures) =>
  MockDB.saveFeatures(noteId, geoJsonFeatures);

const getMapNoteFeatures = async (noteId) => MockDB.findFeatures(noteId);

export default {
  getMapNote,
  getMapNotes,
  createMapNote,
  deleteMapNote,
  getMapNoteFeatures,
  updateMapNoteFeatures,
};
