import Context from "../context";
import { deleteNote, loadFeatures } from "./note-viewer-handlers";
import { DOMConstants, NoteSelector, NoteViewer } from "../dom-components";

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
const renderNewNoteForm = (clickEvent) => {
  const { newNoteForm, activeNoteTarget } = Context.getContext();

  if (activeNoteTarget.firstChild) {
    activeNoteTarget.replaceChild(newNoteForm, activeNoteTarget.firstChild);
  } else {
    activeNoteTarget.append(newNoteForm);
  }
};

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
const renderNoteViewer = async (changeEvent) => {
  const { activeNoteTarget, mapNotesApi } = Context.getContext();

  const noteId = changeEvent.target.value;
  if (!noteId) return; // exit early if the default option is chosen

  const mapNote = await mapNotesApi.getMapNote(noteId);
  if (!mapNote) {
    // 404
    const noteSelector = document.getElementById(
      DOMConstants.NOTES_MANAGER_IDs.noteSelectorId
    );
    NoteSelector.removeNoteOption(noteSelector, noteId);
    return;
  }

  const noteViewer = NoteViewer.buildNoteViewer(mapNote, {
    deleteNoteButtonClickHandler: deleteNote,
    loadFeaturesButtonClickHandler: loadFeatures,
  });

  if (activeNoteTarget.firstChild) {
    activeNoteTarget.replaceChild(noteViewer, activeNoteTarget.firstChild);
  } else {
    activeNoteTarget.append(noteViewer);
  }
};

export { renderNoteViewer, renderNewNoteForm };
