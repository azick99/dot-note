import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  directoryId: {
    prevId: '1',
    nextId: '2',
  },
  toggles: {
    isSidebarOpen: false,
    isChangesSaved: false,
    hasChanges: false,
    isEditorOpen: true,
    isNoteTitleOpened: false,
  },
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setPrevId(state, action) {
      state.directoryId.prevId = action.payload
    },
    setNextId(state, action) {
      state.directoryId.nextId = action.payload
    },
    setToggleNotes(state, action) {
      const { name, noteChanges } = action.payload
      const { isSidebarOpen, isEditorOpen } = state.toggles

      switch (name) {
        case 'sidebarToggle': {
          state.toggles.isSidebarOpen = !isSidebarOpen
          break
        }
        case 'hasChanges': {
          state.toggles.hasChanges = noteChanges
          break
        }
        case 'hasNoChanges': {
          state.toggles.hasChanges = false
          break
        }
        case 'isEditorOpen': {
          state.toggles.isEditorOpen = !isEditorOpen
          break
        }
        case 'isChangesSaved': {
          state.toggles.isChangesSaved = true
          break
        }
        case 'isChangesNotSaved': {
          state.toggles.isChangesSaved = false
          break
        }
        default:
          throw new Error('problems appeared')
      }
    },
  },
})

export const selectAllToggles = (state) => state.notes.toggles
export const selectPrevId = (state) => state.notes.directoryId.prevId
export const selectNextId = (state) => state.notes.directoryId.nextId

export const { setToggleNotes, setPrevId, setNextId } = notesSlice.actions

export default notesSlice.reducer
