import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { formats, modules } from '../../utils/editor-utils/richTextEditorUtils'
import Preview from '../../components/preview/Preview'
import Header from './Header'
import { saveDirectoryChanges } from '../root-nav-route/nav-features/directoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllToggles, setToggleNotes } from './features/notesSlice'
import { FcHome } from 'react-icons/fc'
import 'react-quill/dist/quill.snow.css'
import ChangesSavedModal from '../../components/modal/ChangesSavedModal'

const RenderingSection = ({ content }) => {
  const noteFields = {
    noteTitle: content?.noteTitle,
    noteTags: content?.tags,
    noteContent: content?.noteContent,
  }
  const [noteContentFields, setNoteContentFields] = useState(noteFields)
  const [isEditorOpen, setIsEditorOpen] = useState(true)
  const [isEditorToolbarOpen, setIsEditorToolBarOpen] = useState(true)

  const toggles = useSelector(selectAllToggles)
  const hasChanges = toggles.hasChanges

  const dispatch = useDispatch()

  const { noteTitle, noteTags, noteContent } = noteContentFields
  // Check if there are any changes in noteTitle, noteTags, or noteContent
  const hasTitleChanged = noteTitle !== content?.noteTitle
  const hasTagsChanged = noteTags !== content?.tags
  const hasContentChanged = noteContent !== content?.noteContent

  const noteChanges = hasTitleChanged || hasTagsChanged || hasContentChanged

  useEffect(() => {
    setNoteContentFields({
      noteTitle: content?.noteTitle,
      noteTags: content?.tags,
      noteContent: content?.noteContent,
    })
  }, [content])

  useEffect(() => {
    dispatch(setToggleNotes({ name: 'hasChanges', noteChanges }))
  }, [noteChanges, content])

  const handleContentChange = (newContent) => {
    // Update the noteContent state when the editor content changes
    setNoteContentFields({
      ...noteContentFields,
      noteContent: newContent,
    })
  }

  //Header save handle
  const handleSaveClick = () => {
    dispatch(
      saveDirectoryChanges({
        id: content.id,
        title: noteTitle,
        tags: noteTags,
        content: noteContent,
      })
    )
    dispatch(setToggleNotes({ name: 'hasNoChanges' }))
  }

  //Modal

  let editorContent

  if (isEditorOpen) {
    editorContent = (
      <section id="Notes" className="flex flex-col gap-5">
        <h2>Notes</h2>
        <div className="flex flex-col " key={content.id}>
          <div className="grid grid-cols-2 gap-2 p-3 rounded-md bg-slate-400">
            <p>{noteTitle}</p>
            {/* <input
       type="text"
       className="bg-light-grayish/30 pl-5"
       value={noteTitle}
       onChange={(e) => setNoteTitle(e.target.value)}
     /> */}
            <input
              type="text"
              className=" pl-5 rounded-md border-[.5px]  border-solid border-[#ccc]"
              value={noteTags}
              onChange={(e) =>
                setNoteContentFields({
                  ...noteContentFields,
                  noteTags: e.target.value,
                })
              }
            />
          </div>
          <button onClick={() => setIsEditorToolBarOpen(!isEditorToolbarOpen)}>
            Open Editor Toolbar
          </button>
          <div className="editor-container">
            <ReactQuill
              theme="snow"
              value={noteContent}
              placeholder="What do you want to say..."
              onChange={handleContentChange}
              className={`w-full flex flex-col gap-2 ${
                isEditorToolbarOpen ? 'opened' : 'closed'
              }`}
              modules={modules}
              formats={formats}
              id="editor"
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <ChangesSavedModal toggles={toggles} handleSaveClick={handleSaveClick} />
      <Header
        content={content}
        handleSaveClick={handleSaveClick}
        hasChanges={hasChanges}
        directoryTitle={
          <>
            <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
              <FcHome />
            </span>
            <p className="font-bold">General / 🗒️Notes / {content?.title}</p>
          </>
        }
      />
      <main
        className={`grid ${
          isEditorOpen ? 'grid-cols-2' : 'grid-cols-1'
        } w-full p-6`}
      >
        {editorContent}
        <Preview
          noteContent={noteContent}
          setIsEditorOpen={setIsEditorOpen}
          key={content.id}
        />
      </main>
    </>
  )
}

export default RenderingSection
