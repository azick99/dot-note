import HTMLReactParser from 'html-react-parser'
import './preview.css'

const Preview = ({ noteContent, setIsEditorOpen }) => {
  const handleEditorToggle = () => setIsEditorOpen((prev) => !prev)

  return (
    <section id="preview">
      <h2 className="flex justify-end mr-10 mb-5">Preview</h2>
      <div className="flex flex-col gap-4">
        <button
          className="w-[30px] h-[25px] bg-slate-500 text-white rounded-full mx-2  self-end"
          type="button"
          onClick={handleEditorToggle}
        >
          =
        </button>
        <div className="h-[27rem] overflow-y-auto pl-5 pt-10">
          {HTMLReactParser(noteContent)}
        </div>
      </div>
    </section>
  )
}

export default Preview
