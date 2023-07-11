import { createSlice } from '@reduxjs/toolkit'
import { directories } from '../../data/directories'

const initialState = directories

const directorySlice = createSlice({
  name: 'directories',
  initialState,
  reducers: {
    /*make state = dirctories */
    setIsDirectoryDropdownOpen(state, action) {
      const { directoryId } = action.payload
      state.forEach((directory) => {
        if (directory.id === directoryId) {
          directory.isDirectoryOpen = !directory.isDirectoryOpen
        }
      })
    },
  },
})

export const selectAllDirectories = (state) => state.directories

export const { setIsDirectoryDropdownOpen } = directorySlice.actions

export default directorySlice.reducer
