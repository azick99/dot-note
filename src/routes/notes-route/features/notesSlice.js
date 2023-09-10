import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: null,
  toggles: {
    isSidebarOpen: false,
    isChangesSaved: false,
    hasChanges: false,
  },
  navigateToId: '',
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setUserData(state, action) {
      const { id, email, displayName, photoURL } = action.payload
      const userData = {
        id,
        email,
        displayName,
        photoURL,
      }
      state.userData = userData
    },
    setSignOut(state, action) {
      state.userData = null
    },

    setToggleNotes(state, action) {
      const { name, noteChanges } = action.payload
      const { isSidebarOpen } = state.toggles

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
    setNavigateTo(state, action) {
      state.navigateToId = action.payload
    },
  },
})

export const selectAllToggles = (state) => state.notes.toggles
export const selectUserData = (state) => state.notes.userData
export const selectNavigateToId = (state) => state.notes.navigateToId
export const { setToggleNotes, setUserData, setSignOut, setNavigateTo } =
  notesSlice.actions

export default notesSlice.reducer
