export const DEFAULT_MAP_NOTES_API_URL = process.env.MAP_NOTES_API_URL;

const fetchWrapper = async (endpoint, options = {}) => {
  const response = await fetch(endpoint, options);

  const contentType = response.headers.get("Content-Type");

  if (response.ok && contentType && contentType.includes("application/json")) {
    return response.json();
  }

  if ([201, 204].includes(response.status)) {
    return true;
  }

  throw new Error("Fetch request failed");
};

function MapNotesAPI(mapNotesApiUrl) {
  const buildEndpoint = (endpoint) => `${mapNotesApiUrl}${endpoint}`;

  const notesEndpoint = buildEndpoint("/notes");

  const noteEndpoint = (noteId) => buildEndpoint(`/notes/${noteId}`);

  const featuresEndpoint = (noteId) =>
    buildEndpoint(`/notes/${noteId}/features`);

  this.getMapNotes = async () => fetchWrapper(notesEndpoint);

  this.getMapNote = async (noteId) => fetchWrapper(noteEndpoint(noteId));

  this.createMapNote = async (newMapNote) => {
    const body = JSON.stringify(newMapNote);
    return fetchWrapper(notesEndpoint, {
      body,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  this.deleteMapNote = async (noteId) =>
    fetchWrapper(noteEndpoint(noteId), { method: "DELETE" });

  this.updateMapNoteFeatures = async (noteId, geoJsonFeatures) =>
    fetchWrapper(featuresEndpoint(noteId), {
      method: "PUT",
      body: geoJsonFeatures,
      headers: { "Content-Type": "application/json" },
    });

  this.getMapNoteFeatures = async (noteId) =>
    fetchWrapper(featuresEndpoint(noteId));
}

export default MapNotesAPI;
