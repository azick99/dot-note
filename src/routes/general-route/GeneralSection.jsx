import { useSelector } from 'react-redux'
import GeneralToolBar from '../../components/general-components/GeneralToolBar'
import { selectAllDirectories } from '../root-nav-route/nav-features/directoriesSlice'
import GeneralDirectoryList from '../../components/general-components/GeneralDirectoryList'
import { useState } from 'react'
import { newAddOptions } from '../../data/dropdownOptions'
import './general.style.css'

const GeneralSection = () => {
  const directories = useSelector(selectAllDirectories)
  const notesDirectory = directories.find((d) => d.id === '1')
  const [optionsIndex, setOptionsIndex] = useState({
    layoutIndex: 0,
    newTaskIndex: 'no id',
  })
  const [filteredDirectories, setFilteredDirectories] = useState(
    notesDirectory?.content
  )

  const { layoutIndex, newTaskIndex } = optionsIndex
  console.log(newTaskIndex)

  let notesLayout = 'list'
  //layout styles in general.styles.css
  if (layoutIndex === 1) {
    notesLayout = 'medium'
  }
  if (layoutIndex === 2) {
    notesLayout = 'large'
  }

  return (
    <main className="flex flex-col gap-6 px-10 w-full">
      <h2 className=" text-lg">✅ All Tasks</h2>
      <GeneralToolBar
        optionsIndex={optionsIndex}
        setOptionsIndex={setOptionsIndex}
        setFilteredDirectories={setFilteredDirectories}
        filteredDirectories={notesDirectory?.content}
      />
      <div className={`${notesLayout} gap-3`} key={directories.id}>
        {filteredDirectories.map((directory) => {
          return (
            <GeneralDirectoryList
              key={directory.id}
              directory={directory}
              layoutIndex={layoutIndex}
            />
          )
        })}
      </div>
      {newTaskIndex === 'no id' ? (
        ''
      ) : (
        <div className="general-input flex items-center gap-4 w-full">
          <input
            type="text"
            className="border p-1 border-solid rounded-md border-almost-dark/30 focus:border-almost-dark outline-none w-full basis-[60%]"
          />
          <div className="grid grid-cols-3 w-full gap-3 basis-[40%]">
            <button className="col-span-2 p-2 hover:bg-primery bg-primery/80 text-white items-center rounded-md text-sm transition">
              {`Add New ${newAddOptions[newTaskIndex].title}`} 
            </button>
            <button
              className="p-2 hover:bg-primery  bg-primery/80 text-white items-center rounded-md text-sm transition"
              onClick={() =>
                setOptionsIndex({ ...optionsIndex, newTaskIndex: 'no id' })
              }
            >
              X
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default GeneralSection
