import Context from "./context";

export const DEFAULT_MAP_NOTES_API_URL =
  process.env.MAP_NOTES_API_URL || "http://localhost:8008";

const { mapNotesApiUrl } = Context.getContext();

const getMapNotes = async () => {};

const getMapNote = async (noteId) => {};

const createMapNote = async (newMapNote) => {};

const deleteMapNote = async (noteId) => {};

const updateMapNoteFeatures = async (noteId, geoJsonFeatures) => {};

export default {
  getMapNote,
  getMapNotes,
  createMapNote,
  deleteMapNote,
  updateMapNoteFeatures,
};
