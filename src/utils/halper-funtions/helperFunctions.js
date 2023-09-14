import { setNavigateTo } from '../../routes/notes-route/features/notesSlice'
import {
  removeDirectory,
  updateDirectory,
} from '../../routes/root-nav-route/nav-features/directoriesSlice'

///repeated functions

export const handleNavigateToId = (id, dispatch) =>
  dispatch(setNavigateTo(`/${id}`))

export const handleRemoveDirectory = (noteId) =>
  removeDirectory({ contentId: noteId })

export const handleEditDirectory = (noteId, noteTitle) =>
  updateDirectory({ id: noteId, title: noteTitle })
  
