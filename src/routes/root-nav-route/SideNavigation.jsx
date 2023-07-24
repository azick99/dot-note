import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import ChangableNavDirectory from '../../components/navComponents/ChangableNavDirectory'
import StableNavDirectory from '../../components/navComponents/StableNavDirectory'
import { FcHome, FcUpload, FcEmptyTrash } from 'react-icons/fc'
import { useEffect } from 'react'

const SideNavigation = () => {
  // navigate when user first open
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/notes/1')
  }, [])

  return (
    <div className="flex min-h-screen">
      <nav
        id="sidebar"
        className="w-[18em] bg-secondary flex flex-col py-5 gap-3 font-bold"
      >
        <div className="flex items-center pl-5 gap-5">
          <span className=" text-logo bg-almost-dark rounded-full w-7 h-7 flex justify-center items-center text-white font-serif font-medium">
            N
          </span>{' '}
          <h1>Dot note</h1>
        </div>

        <StableNavDirectory />

        <hr />

        <ul className="directory">
          <li className="pl-6 py-2">Teamspaces</li>
          {/*if costum css exist they come first and can find in index.css */}
          <NavLink
            to="/general"
            className="li-directory flex items-center gap-2 pl-1 "
          >
            <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
              <FcHome />
            </span>
            <span>General</span>
          </NavLink>
          <ChangableNavDirectory />
        </ul>

        <hr />

        <ul className="directory">
          <NavLink
            to="/uploaded"
            className="li-directory flex items-center gap-2"
          >
            <FcUpload />
            <span>Uploaded</span>
          </NavLink>
          <NavLink to="/trash" className="li-directory flex items-center gap-2">
            <FcEmptyTrash />
            <span>Trash</span>
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default SideNavigation
