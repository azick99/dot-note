import { configureStore } from '@reduxjs/toolkit'
import directoriesReducer from '../routes/root-nav-route/nav-features/directoriesSlice'
import notesReducer from '../routes/notes-route/features/notesSlice'

export default configureStore({
  reducer: {
    directories: directoriesReducer,
    notes: notesReducer,
  },
})
