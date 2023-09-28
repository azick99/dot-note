import { createSlice } from '@reduxjs/toolkit'
import { toggle } from '../../../utils/halper-funtions/toggle'
import { directories } from '../../../data/directories'

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
      toggle(state, directoryId, name)
    },
    addNewDirectory(state, action) {
      const { id, title, directoryId, username } = action.payload
      const date = new Date()
      const time = date
        .toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
        .replace(/:/g, ':')

      state.forEach((directory) => {
        if (directory.id === directoryId) {
          let newTitle = title

          // Check if the title already exists in the directory
          const titleExists = directory.content.some(
            (content) => content.title === newTitle
          )

          if (titleExists) {
            newTitle = `${title}(1)`
          }
          const newContent = {
            id,
            title: newTitle,
            createdAt: date.toDateString() + ' ' + time,
            createdBy: username,
            noteTitle: 'New page',
            tags: 'new',
            noteContent: '<p><br></p>',
          }

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
      state.forEach((directory) => {
        const contentIndex = directory.content.findIndex(
          (content) => content.id === contentId
        )
        if (contentIndex !== -1) {
          directory.content.splice(contentIndex, 1)
        }
      })
    },

    saveDirectoryChanges(state, action) {
      const { id, title, tags, content } = action.payload
      state.forEach((directory) => {
        const existingDirectory = directory.content.find(
          (content) => content.id === id
        )
        if (existingDirectory) {
          existingDirectory.noteTitle = title
          existingDirectory.tags = tags
          existingDirectory.noteContent = content
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
  saveDirectoryChanges,
  // setPrevContentId
} = directorySlice.actions

export default directorySlice.reducer
