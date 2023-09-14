import { useSelector } from 'react-redux'
import GeneralToolBar from '../../components/general-components/GeneralToolBar'
import { selectAllDirectories } from '../root-nav-route/nav-features/directoriesSlice'
import GeneralDirectoryList from '../../components/general-components/GeneralDirectoryList'
import { useState } from 'react'
import './general.style.css'
const GeneralSection = () => {
  const [index, setIndex] = useState(0)
  const directories = useSelector(selectAllDirectories)
  const notesDirectory = directories.find((d) => d.id === '1')
  let notesLayout = 'list'
  //layout styles in general.styles.css
  if (index === 1) {
    notesLayout = 'medium'
  }
  if (index === 2) {
    notesLayout = 'large'
  }
  if (notesDirectory) {
    const notesContent = notesDirectory.content
    // Now, you can map through the content and display it
    return (
      <main className="flex flex-col gap-6 px-10 w-full">
        <h2 className=" text-lg">✅ All Tasks</h2>
        <GeneralToolBar index={index} setIndex={setIndex} />
        <div className={`${notesLayout} gap-2`}>
          {notesContent.map((note) => {
            return (
              <GeneralDirectoryList key={note.id} note={note} index={index} />
            )
          })}
        </div>
      </main>
    )
  } else {
    // Handle the case where the "Notes" directory with id '1' is not found
    return <p>Notes directory not found.</p>
  }
}

export default GeneralSection
