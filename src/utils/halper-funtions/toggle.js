import { setNavigateTo } from '../../routes/notes-route/features/notesSlice'

export const toggle = (state, directoryId, name) => {
  state.forEach((directory) => {
    if (directory.id === directoryId) {
      if (name === 'folderDropdown') {
        directory.isDirectoryOpen = !directory.isDirectoryOpen
      }
      if (name === 'addDropdown') {
        directory.isAddClicked = true
      }
      if (name === 'cancelDropdown') {
        directory.isAddClicked = false
      }
    }
  })
}

export const handleNavigateToId = (id, dispatch) =>
  dispatch(setNavigateTo(`/${id}`))
