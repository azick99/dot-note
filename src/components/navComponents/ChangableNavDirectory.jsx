import { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillFolderOpen, AiFillFolder } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllDirectories,
  setIsDirectoryDropdownOpen,
} from '../../routes/root-nav-route/nav-features/directoriesSlice'
import AddNewDirectoryInput from './AddNewDirectoryInput'
import EditDirectoryInput from './EditDirectoryInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { selectAllToggles } from '../../routes/notes-route/features/notesSlice'

import ModalToggleNavBar from './ModalToggleNavBar'

const ChangableNavDirectory = () => {
  const [editDirectoryId, setEditDirectoryId] = useState('')
  const [directoryId, setDirectoryId] = useState('1')

  const dispatch = useDispatch()
  const directories = useSelector(selectAllDirectories)

  const toggles = useSelector(selectAllToggles)
  const hasChanges = toggles.hasChanges

  const handleFolderDropdown = (directoryId) =>
    dispatch(
      setIsDirectoryDropdownOpen({ directoryId, name: 'folderDropdown' })
    )

  return (
    <ul className="flex flex-col">
      {directories.map((directory) => {
        let contentRender

        if (directory.isDirectoryOpen) {
          contentRender = (
            <Fragment>
              <ul className="flex flex-col transition">
                {directory.content.map((content) =>
                  content.id === editDirectoryId ? (
                    <EditDirectoryInput
                      content={content}
                      key={content.id}
                      setEditDirectoryId={setEditDirectoryId}
                    />
                  ) : (
                    <div key={content.id} className="relative">
                      {hasChanges ? (
                        <ModalToggleNavBar
                          content={content}
                          directoryId={directoryId}
                          setDirectoryId={setDirectoryId}
                        />
                      ) : (
                        <NavLink
                          to={`/notes/${content.id}`}
                          className="li-directory !pl-14  flex items-center gap-2 font-semibold "
                          onClick={() => setDirectoryId(content.id)}
                        >
                          <div className="w-[10rem] h-[1.5rem] overflow-x-auto">
                            🗒️{content.title}
                          </div>
                        </NavLink>
                      )}
                      <button
                        type="button"
                        aria-label="edit"
                        className=" flex self-start items-center bg-white/70 rounded-md p-1 border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue absolute z-10 top-[10px] right-8"
                        onClick={() => setEditDirectoryId(content.id)}
                      >
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="h-3 w-3"
                        />
                      </button>
                    </div>
                  )
                )}
              </ul>
              <AddNewDirectoryInput directory={directory} setDirectoryId={setDirectoryId}/>
            </Fragment>
          )
        }

        return (
          <Fragment key={directory.id}>
            <li
              className="li-directory !pl-8 flex items-center gap-2 font-semibold cursor-pointer"
              onClick={() => handleFolderDropdown(directory.id)}
            >
              {directory.isDirectoryOpen ? (
                <AiFillFolderOpen />
              ) : (
                <AiFillFolder />
              )}
              <span>{directory.title}</span>
            </li>
            {contentRender}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default ChangableNavDirectory
