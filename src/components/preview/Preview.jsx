import HTMLReactParser from 'html-react-parser'
import './preview.css'


const Preview = ({ noteContent }) => {
  return (
    <section id="preview">
      <h2 className="flex justify-end mr-10">Preview</h2>
      <div className="p-5 overflow-auto">{HTMLReactParser(noteContent)}</div>
    </section>
  )
}

export default Preview
