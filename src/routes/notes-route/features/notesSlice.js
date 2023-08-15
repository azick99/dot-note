import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
        default:
          throw new Error('problems appeared')
      }
    },
  },
})

export const selectAllToggles = (state) => state.notes.toggles

export const { setToggleNotes } = notesSlice.actions

export default notesSlice.reducer
