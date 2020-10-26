/**
 * @typedef MapNotesContext MapNotes context container
 * @property {import('ol/src/Map').default} map OpenLayers map reference
 * @property {HTMLFormElement} newNoteForm NewNoteForm component reference
 * @property {import('ol/layer/Vector').default} editableLayer the editable vector layer
 * @property {import('ol/source/Vector').default} editableSource the editable vector source
 * @property {HTMLElement} activeNoteTarget the ActiveNote container to render within
 * @property {string} activeNoteTargetId the ID attribute of the ActiveNote target container
 * @property {string} mapNotesApiUrl URL of the MapNotes API to communicate with
 */

/**
 * Shared MapNotes context
 * - allows access to references of objects used in other modules
 * - add to the context with @see Context.addContext
 * - get the context with @see Context.getContext
 *
 * @example
 * import Context from "./context";
 *
 * Context.addContext({ map, newNoteForm, editableLayer, editableSource })
 * const context = Context.getContext();
 * // use destructuring to access specific references
 * const { map, newNoteForm, editableLayer, editableSource } = Context.getContext()
 */
function Context() {
  const context = {
    map: null,
    newNoteForm: null,
    editableLayer: null,
    editableSource: null,
    mapNotesApiUrl: null,
    activeNoteTarget: null,
    activeNoteTargetId: null,
  };

  /**
   *
   * @param {MapNotesContext} newContext
   *
   * @example
   * import Context from "./context";
   *
   * Context.addContext({ map }); // set one at a time
   * // set multiple context entries at once
   * Context.addContext({ map, newNoteForm, editableLayer, editableSource });
   */
  this.addContext = function (newContext) {
    for (const property in newContext) {
      if (context[property] !== null) {
        // only set if null, no overwriting
        context[property] = newContext[property];
      }
    }
  };

  /**
   * Access the shared context
   * @returns {MapNotesContext} MapNotes context container
   *
   * @example
   * import Context from "./context";
   *
   * const context = Context.getContext();
   * const map = context.map;
   * // or use destructuring to access specific references
   * const { map, newNoteForm, editableLayer, editableSource } = Context.getContext();
   */
  this.getContext = function () {
    return Object.assign({}, context);
  };
}

export default new Context();
