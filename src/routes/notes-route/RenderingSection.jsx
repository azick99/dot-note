import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import { formats, modules } from '../../utils/editor-utils/richTextEditorUtils'
import 'react-quill/dist/quill.snow.css'
import Preview from '../../components/preview/Preview'
import Header from './Header'
import { saveDirectoryChanges } from '../root-nav-route/nav-features/directoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllToggles, setToggleNotes } from './features/notesSlice'
import { FcHome } from 'react-icons/fc'

const RenderingSection = ({ content }) => {
  const [noteTitle, setNoteTitle] = useState(content?.noteTitle)
  const [noteTags, setNoteTags] = useState(content?.tags)
  const [noteContent, setNoteContent] = useState(content?.noteContent)

  const toggles = useSelector(selectAllToggles)
  // make toggles in notesSlice
  const hasChanges = toggles.hasChanges
  const isEditorOpen = toggles.isEditorOpen
  const isChangesSaved = toggles.isChangesSaved

  const dispatch = useDispatch()

  // Check if there are any changes in noteTitle, noteTags, or noteContent
  const hasTitleChanged = noteTitle !== content?.noteTitle
  const hasTagsChanged = noteTags !== content?.tags
  const hasContentChanged = noteContent !== content?.noteContent

  const noteChanges = hasTitleChanged || hasTagsChanged || hasContentChanged

  useEffect(() => {
    setNoteTitle(content?.noteTitle)
    setNoteTags(content?.tags)
    setNoteContent(content?.noteContent)

    if (hasChanges) {
      dispatch(setToggleNotes({ name: 'isChangesSaved' }))
    }
  }, [content])

  useEffect(() => {
    // Set hasChanges to true if any of the fields have changed
    dispatch(setToggleNotes({ name: 'hasChanges', noteChanges }))
  }, [noteChanges, content])

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
    dispatch(setToggleNotes({ name: 'hasNoChanges' }))
    dispatch(setToggleNotes({ name: 'isChangesNotSaved' }))
  }

  let editorContent

  if (isEditorOpen) {
    editorContent = (
      <section id="Notes" className="flex flex-col gap-5">
        <h2>Notes</h2>
        <div className="flex flex-col gap-5 " key={content.id}>
          <div className="grid grid-cols-2 gap-2 ">
            <p>{noteTitle}</p>
            {/* <input
       type="text"
       className="bg-light-grayish/30 pl-5"
       value={noteTitle}
       onChange={(e) => setNoteTitle(e.target.value)}
     /> */}
            <input
              type="text"
              className=" pl-5 rounded-md border-[.5px] border-solid border-[#ccc]"
              value={noteTags}
              onChange={(e) => setNoteTags(e.target.value)}
            />
          </div>
          <div className="w-full flex" id="editor">
            <ReactQuill
              theme="snow"
              value={noteContent}
              placeholder="What do you want to say..."
              onChange={handleContentChange}
              className="w-full flex flex-col gap-2 h-[23rem]"
              modules={modules}
              formats={formats}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* {isChangesSaved ? (
        <div className="fixed inset-0 flex items-center justify-center z-10 bg-black/50">
          <div className="flex flex-col gap-2 p-4 bg-white">
            <p>You have not saved changes!</p>
            <div className="flex gap-2">
              <button
                className="border border-black px-4 py-2"
                onClick={handleSaveClick}
              >
                Save Changes
              </button>
              <button
                className="border border-black px-4 py-2"
                onClick={() =>
                  dispatch(setToggleNotes({ name: 'isChangesNotSaved' }))
                }
              >
                Do not Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )} */}
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
        } w-full h-full p-6`}
      >
        {editorContent}
        <Preview
          noteContent={noteContent}
          setToggleNotes={setToggleNotes}
          key={content.id}
        />
      </main>
    </>
  )
}

export default RenderingSection
