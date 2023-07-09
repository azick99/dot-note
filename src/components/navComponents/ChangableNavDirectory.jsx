import { directories } from '../../data/directories'
import { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AiFillFolderOpen, AiFillFolder, AiFillFileAdd } from 'react-icons/ai'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const ChangableNavDirectory = () => {
  const [parentDirectories, setParentDirectories] = useState(directories)

  const handleDropdown = (directoryId) => {
    setParentDirectories(
      parentDirectories.map((directory) =>
        directory.id === directoryId
          ? { ...directory, isDirectoryOpen: !directory.isDirectoryOpen }
          : directory
      )
    )
  }

  return (
    <ul className="flex flex-col">
      {parentDirectories.map((directory) => {
        let contentRender
        if (directory.isDirectoryOpen) {
          contentRender = (
            <Fragment>
              <ul className="flex flex-col transition">
                {directory.content.map((content) => (
                  <NavLink
                    to={content.link}
                    key={content.id}
                    className="li-directory !pl-14  flex items-center gap-2 font-semibold"
                  >
                    <span>🗒️{content.title}</span>{' '}
                    <button
                      type="button"
                      aria-label="edit"
                      className="flex items-center bg-white/70 rounded-md p-1 border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue"
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="h-3 w-3"
                      />
                    </button>
                  </NavLink>
                ))}
              </ul>
              <button
                type="button"
                aria-label="add"
                className="li-directory !pl-14  flex items-center gap-2 font-semibold"
              >
                <AiFillFileAdd />
                Add new {directory.file}
              </button>
            </Fragment>
          )
        }

        return (
          <Fragment key={directory.id}>
            <li
              className="li-directory !pl-8 flex items-center gap-2 font-semibold cursor-pointer"
              onClick={() => handleDropdown(directory.id)}
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
