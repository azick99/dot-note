import { configureStore } from '@reduxjs/toolkit'
import directoriesReducer from '../routes/root-nav-route/directoriesSlice'

export default configureStore({
  reducer: {
    directories: directoriesReducer,
  },
})
