# Project Notes

## learning goals

- primary
  - consuming REST
  - expanding knowledge of openlayers
  - exposure to self-contained modules
- secondary
  - all primary
  - implementing a module
  - publishing a module

## stages

- stage 0: descriptions of behavior and suggested markup
  - implement library from scratch
- stage 1: interface code
  - implement library interfaces and handlers
- stage 2: library implementation
  - implement handlers

> bonus

- create and publish as NPM package

# Client

## interactions

### creating a note

- `CreateNote` on click -> `NewNote` component in `ActiveNote` container
  - `NewNote` component
    - form > text input(title) + textarea input(body) + `DrawFeatures` button + `Create` button
  - `DrawFeatures` component
    - click: enter draw mode
- `DrawFeatures` click
  - create editable vector source and layer
    - source has no initial features
  - add map interactions (`Draw` and `Snap`) with editable source
  - add the drawable vector layer
  - add map interaction (Draw + source)
    - type: `Polygon`
- `Create` click: submit note and features
  - submit note
    - send note payload using `NewNote` form input values
    - req: `POST /notes ({ title, body })` -> `newNote`
    - create `NoteOption` and add to `NoteSelector`
  - capture source feature(s)
    - convert to GeoJSON features collection using writeFeatures (pass features)
      - stringify for body
    - send features payload
    - req: `PUT /notes/{noteId}/features (FeatureCollection)`
      - NECESSARY?: features.forEach -> feature.setProperty("noteId", newNote.id)
      - noteId is provided via path var
      - should just be added to outbound NoteFeature DTOs
      - maybe as bonus for them to add other properties (like related layers for recreating map state)
  - destroy editable vector layer and / or source

> bonus: `ClearFeatures` button to clear all features in the editable source

### populate `NoteSelector`

- page load -> get notes + populate `NoteSelector`
  - req: `GET /notes`
- populate `NoteSelector`: notes.map -> `NoteOption`
  - div > select(`NoteOption`) + `CreateNote` button
  - include base option, "Select a Note" to force change event
  - `NoteOption`
    - value: note.id
    - innerText: note.title
  - `CreateNote` button
    - click: displays `NewNote` in `ActiveNote` container
- `NoteSelector` on change: populate `ActiveNote` container with `ViewNote` component
  - `ViewNote` component
    - h1(note.title) + p(note.body) + `LoadFeatures` button + `DeleteNote` button
    - `LoadFeatures` button
      - value: note.id
      - on click: request and render features
    - `DeleteNote` button
      - value: note.id
      - click: delete note
- `LoadFeatures` on click
  - req: `GET /notes/{target.value}/features`
    - FC JSON -> GeoJSON read features -> vector source -> apply to vector layer
- `DeleteNote` on click
  - req: `DELETE /notes/{target.value}`
  - cleanup
    - clear source
    - clear ActiveNote
    - remove NoteOption from NoteSelector

# API

## endpoints

### `/notes`

- `GET` -> `Note[]`
- `POST` (`{ title, body }`) -> `Note`
  - status: `201`
  - headers: `Location={ORIGIN}/notes/{noteId}`

### `/notes/{noteId}`

- `DELETE` -> `204`

### `/notes/{noteId}/features`

- `GET` -> `NoteFeatureCollection`
- `PUT` (`FeatureCollection`) -> `201`
  - headers: `Location={ORIGIN}/notes/{noteId}/features`

## resource shapes

### `Note`

```json
Note {
  id: number
  title: string
  body: string
}
```

> bonus maturity

```json
Note {
  id: number
  title: string
  body: string
  _href: "{ORIGIN}/notes/{noteId}"
  _link: [
    { rel: "features", href: "{ORIGIN}/notes/{noteId}/features }
  ]
}
```

### `NoteFeature`

> GeoJSON feature

> not exposed as an entity, a child to `NoteFeatureCollection`

```json
NoteFeature {
  type: "Feature"
  id: number
  properties: { noteId: number }
  geometry: {
    type: "Polygon"
    coordinates: Coordinates[]
  }
}
```

### `NoteFeatureCollection`

> GeoJSON feature collection

```json
NoteFeatureCollection {
  type: "FeatureCollection"
  features: NoteFeature[]
}
```
