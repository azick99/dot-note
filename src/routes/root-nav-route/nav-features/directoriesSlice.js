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
      const time = `${date.getHours()}:${date
        .getMinutes()
        .toString()}:${date.getSeconds()}`
        
      const newContent = {
        id,
        title,
        createdAt: date.toDateString() + ' ' + time,
        createdBy: username,
        noteTitle: 'New page',
        tags: 'new',
        noteContent: '<p><br></p>',
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
    // setPrevContentId(state, action) {
    //   const { id } = action.payload
    //   state.forEach((directory) => {
    //     const existingDirectory = directory.content.find(
    //       (content) => content.id === id
    //     )
    //     if (existingDirectory) {
    //       existingDirectory.id = id
    //     }
    //   })
    // },
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
