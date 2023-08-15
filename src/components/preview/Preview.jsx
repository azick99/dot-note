import HTMLReactParser from 'html-react-parser'
import { useDispatch } from 'react-redux'
import './preview.css'

const Preview = ({ noteContent, setToggleNotes }) => {
  const dispatch = useDispatch()

  const handleEditorToggle = () =>
    dispatch(setToggleNotes({ name: 'isEditorOpen' }))
    
  return (
    <section id="preview">
      <h2 className="flex justify-end mr-10 mb-5">Preview</h2>
      <div className="flex flex-col gap-4">
        <button
          className="w-[30px] h-[25px] bg-slate-500 text-white rounded-full mx-2 self-end"
          type="button"
          onClick={handleEditorToggle}
        >
          =
        </button>
        <div className="overflow-auto pl-5">{HTMLReactParser(noteContent)}</div>
      </div>
    </section>
  )
}

export default Preview
