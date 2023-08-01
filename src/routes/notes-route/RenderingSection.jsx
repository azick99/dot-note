import { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill'
import { formats, modules } from '../../utils/editor-utils/richTextEditorUtils'
import 'react-quill/dist/quill.snow.css'
import Preview from '../../components/preview/Preview'
import Header from './Header'
import { saveDirectoryChanges } from '../root-nav-route/directoriesSlice'
import { useDispatch } from 'react-redux'

const RenderingSection = ({ content }) => {
  const [noteTitle, setNoteTitle] = useState(content?.title)
  const [noteTags, setNoteTags] = useState(content?.tags)
  const [noteContent, setNoteContent] = useState(content?.noteContent)
  const noteContentRef = useRef(noteContent)

  const dispatch = useDispatch()
  console.log(noteContent)
  useEffect(() => {
    setNoteTitle(content?.title)
    setNoteTags(content?.tags)
    setNoteContent(content?.noteContent)
  }, [content])

  const handleContentChange = (newContent) => {
    // Update the noteContent state when the editor content changes
    setNoteContent(newContent)
  }

  const handleSaveClick = () => {
    dispatch(
      saveDirectoryChanges({
        id: content.id,
        title: noteTitle,
        tags: noteTags,
        content: noteContent,
      })
    )
  }

  return (
    <>
      <Header content={content} handleSaveClick={handleSaveClick} />
      <main className=" grid grid-cols-2 w-full h-full p-6">
        <section id="Notes" className="flex flex-col gap-5">
          <h2>Notes</h2>
          <div className="flex flex-col gap-5 " key={content.id}>
            <div className="grid grid-cols-2 gap-2 ">
              <input
                type="text"
                className="bg-light-grayish/30 pl-5"
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
              />
              <input
                type="text"
                className="bg-light-grayish/30 pl-5"
                value={noteTags}
                onChange={(e) => setNoteTags(e.target.value)}
              />
            </div>
            <div className="w-full" id="editor">
              <ReactQuill
                theme="snow"
                value={noteContent}
                onChange={handleContentChange}
                className="w-full flex flex-col gap-2 h-[23rem]"
                modules={modules}
                formats={formats}
              />
            </div>
          </div>
        </section>
        <Preview noteContent={noteContent} key={content.id} />
      </main>
    </>
  )
}

export default RenderingSection
