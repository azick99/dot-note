import { createSlice } from '@reduxjs/toolkit'
import { directories } from '../../data/directories'
import { openDropdown } from '../../utils/halper-funtions/dropdown'

const initialState = directories
const directorySlice = createSlice({
  name: 'directories',
  initialState,
  reducers: {
    setIsDirectoryDropdownOpen(state, action) {
      //You can find the openDropdown helper function in utils folder
      const { directoryId, name } = action.payload
      //The function works with all dropdowns on the navigation part,
      //except "EditDrodpwon"
      openDropdown(state, directoryId, name)
    },

    addNewDirectory(state, action) {
      const { id, title, directoryId } = action.payload

      const newContent = {
        id: id,
        title: title,
        tags: 'new',
        content: 'New',
      }

      state.forEach((directory) => {
        if (directory.id === directoryId) {
          directory.content.push(newContent)
        }
      })
    },
    updateDirectory(state, action) {
      const { id, title } = action.payload
      state.forEach((directory) => {
        const existingContent = directory.content.find(
          (content) => content.id === id
        )
        if (existingContent) {
          existingContent.title = title
        }
      })
    },
    removeDirectory(state, action) {
      const { contentId } = action.payload
      console.log(action.payload)
      state.forEach((directory) => {
        const contentIndex = directory.content.findIndex(
          (content) => content.id === contentId
        )
        if (contentIndex !== -1) {
          directory.content.splice(contentIndex, 1)
        }
      })
    },
  },
})

export const selectAllDirectories = (state) => state.directories

export const {
  setIsDirectoryDropdownOpen,
  addNewDirectory,
  updateDirectory,
  removeDirectory,
} = directorySlice.actions

export default directorySlice.reducer
