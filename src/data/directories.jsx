import { nanoid } from '@reduxjs/toolkit'

export const directories = [
  {
    id: '1',
    title: '🗒️Notes',
    isDirectoryOpen: true,
    file: 'note',
    isAddClicked:false,
    content: [
      {
        id: '1',
        title: 'Welcome Note',
        tags: 'html',
        noteContent: 'Hello world',
      },
      {
        id: nanoid(),
        title: 'hello',
        tags: 'html',
        noteContent: 'I am here',
      },
    ],
  },
  {
    id: '2',
    title: '🎒To-Do',
    isDirectoryOpen: false,
    file: 'todo',
    isAddClicked:false,
    content: [],
  },
  {
    id: '3',
    title: '🗃️Git Hub MarkDown',
    isDirectoryOpen: false,
    file: 'markdown',
    isAddClicked:false,
    content: [],
  },
]
