import { useSelector } from 'react-redux'
import GeneralToolBar from '../../components/general-components/GeneralToolBar'
import { selectAllDirectories } from '../root-nav-route/nav-features/directoriesSlice'
import GeneralDirectoryList from '../../components/general-components/GeneralDirectoryList'
import { useState } from 'react'
import './general.style.css'

const GeneralSection = () => {
  const directories = useSelector(selectAllDirectories)
  const notesDirectory = directories.find((d) => d.id === '1')
  const [index, setIndex] = useState(0)
  const [filteredDirectories, setFilteredDirectories] = useState(
    notesDirectory.content
  )

  
  let notesLayout = 'list'
  //layout styles in general.styles.css
  if (index === 1) {
    notesLayout = 'medium'
  }
  if (index === 2) {
    notesLayout = 'large'
  }
  if (notesDirectory) {
    return (
      <main className="flex flex-col gap-6 px-10 w-full">
        <h2 className=" text-lg">✅ All Tasks</h2>
        <GeneralToolBar
          index={index}
          setIndex={setIndex}
          setFilteredDirectories={setFilteredDirectories}
          filteredDirectories={notesDirectory.content}
        />
        <div className={`${notesLayout} gap-3`}>
          {filteredDirectories.map((note) => {
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
