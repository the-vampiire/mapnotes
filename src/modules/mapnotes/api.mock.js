const mapNoteStore = {};

const featureStore = {};

const mockResponse = ({ status = 200, body = {} }) => ({
  status,
  json: async () => body,
});

const findEntity = (store) => (entityId) => store[entityId] || null;

const findMapNote = (noteId) => findEntity(mapNoteStore)(noteId);

const findFeatures = (noteId) => findEntity(featureStore)(noteId);

const findMapNotes = () => Object.values(mapNoteStore);

const removeMapNote = (noteId) => {
  delete mapNoteStore[noteId];
};

const saveFeatures = (noteId, features) => {
  featureStore[noteId] = features;
};

const saveMapNote = (newMapNote) => {
  const randomId = Date.now();
  const mapNote = { ...newMapNote, id: randomId };
  mapNoteStore[randomId] = mapNote;

  return mapNote;
};

export default {
  findMapNotes,
  mockResponse,
  findMapNote,
  saveMapNote,
  removeMapNote,
  findFeatures,
  saveFeatures,
};

// MOCK SEEDING
const mockMapNote = (id = Date.now()) => ({
  id,
  title: `Title: ${id}`,
  body: Array(20).fill(`the body is here for ${id}`),
});

const mockMapNotes = Array(20)
  .fill("")
  .map((_, i) => mockMapNote(i + Date.now()));

mockMapNotes.forEach(saveMapNote);
