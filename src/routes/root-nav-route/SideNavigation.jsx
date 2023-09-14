import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import ChangableNavDirectory from '../../components/navComponents/ChangableNavDirectory'
import StableNavDirectory from '../../components/navComponents/StableNavDirectory'
import { FcHome, FcUpload, FcEmptyTrash } from 'react-icons/fc'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectAllToggles,
  setToggleNotes,
} from '../notes-route/features/notesSlice'
import { handleNavigateToId } from '../../utils/halper-funtions/helperFunctions'

const SideNavigation = () => {
  const isSidebarOpen = useSelector(selectAllToggles).isSidebarOpen
  const toggles = useSelector(selectAllToggles)
  const hasChanges = toggles.hasChanges

  const dispatch = useDispatch()

  const handleModalDropdown = (directoryId) => {
    dispatch(setToggleNotes({ name: 'isChangesSaved' }))
    //helperFunction.js
    handleNavigateToId(directoryId, dispatch)
  }

  const handleSidebarToggle = () =>
    dispatch(setToggleNotes({ name: 'sidebarToggle' }))

  // navigate when user first open
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/general')
  }, [])

  return (
    <div
      className={`${
        isSidebarOpen ? 'flex' : 'grid grid-cols-12'
      } min-h-screen `}
    >
      <div className={`flex ${isSidebarOpen ? 'w-[5wv]' : 'col-span-3'} `}>
        {isSidebarOpen ? (
          ''
        ) : (
          <nav
            id="sidebar"
            className="w-[90%] bg-secondary flex flex-col py-5 gap-3 font-bold h-[50.5vw] overflow-y-auto"
          >
            <div className="flex items-center pl-5 gap-5">
              <span className=" text-logo bg-almost-dark rounded-full w-7 h-7 flex justify-center items-center text-white font-serif font-medium">
                N
              </span>{' '}
              <h1>Dot note</h1>
            </div>

            <StableNavDirectory
              hasChanges={hasChanges}
              handleModalDropdown={handleModalDropdown}
            />

            <hr />

            <ul className="directory">
              <li className="pl-6 py-2">Teamspaces</li>
              {/*if costum css exist they come first and can find in index.css */}
              {hasChanges ? (
                <li
                  className="li-directory flex items-center gap-2 pl-1 cursor-pointer"
                  onClick={() => handleModalDropdown('general')}
                >
                  <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
                    <FcHome />
                  </span>
                  <span>General</span>
                </li>
              ) : (
                <NavLink
                  to="/general"
                  className="li-directory flex items-center gap-2 pl-1 "
                >
                  <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
                    <FcHome />
                  </span>
                  <span>General</span>
                </NavLink>
              )}
              <ChangableNavDirectory />
            </ul>

            <hr />

            <ul className="directory">
              {hasChanges ? (
                <>
                  <li
                    className="li-directory flex items-center gap-2 cursor-pointer"
                    onClick={() => handleModalDropdown('uploaded')}
                  >
                    <FcUpload />
                    <span>Uploaded</span>
                  </li>
                  <li
                    className="li-directory flex items-center gap-2 cursor-pointer"
                    onClick={() => handleModalDropdown('trash')}
                  >
                    <FcEmptyTrash />
                    <span>Trash</span>
                  </li>
                </>
              ) : (
                <>
                  <NavLink
                    to="/uploaded"
                    className="li-directory flex items-center gap-2"
                  >
                    <FcUpload />
                    <span>Uploaded</span>
                  </NavLink>
                  <NavLink
                    to="/trash"
                    className="li-directory flex items-center gap-2"
                  >
                    <FcEmptyTrash />
                    <span>Trash</span>
                  </NavLink>
                </>
              )}
            </ul>
          </nav>
        )}
        <div className=" flex items-center justify-center">
          <button
            className="self-start  bg-light-grayish text-white p-2 mt-4 ml-3"
            type="button"
            aria-label="side bar dropdown"
            onClick={handleSidebarToggle}
          >
            =
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default SideNavigation
