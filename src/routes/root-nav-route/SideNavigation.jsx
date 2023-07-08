import { Outlet } from 'react-router-dom'
import ChangableNavDirectory from '../../components/navComponents/ChangableNavDirectory'
import StableNavDirectory from '../../components/navComponents/StableNavDirectory'
import { FcHome, FcUpload, FcEmptyTrash } from 'react-icons/fc'

const SideNavigation = () => {
  return (
    <div className='flex'>
      <nav
        id="sidebar"
        className="w-[19em] h-screen bg-secondary flex flex-col py-5 gap-3 font-bold"
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
          <li className="li-directory flex items-center gap-2 pl-1 ">
            <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
              <FcHome />
            </span>
            <span>General</span>
          </li>
          <ChangableNavDirectory />
        </ul>

        <hr />

        <ul className="directory">
          <li className="li-directory flex items-center gap-2">
            <FcUpload />
            <span>Uploaded</span>
          </li>
          <li className="li-directory flex items-center gap-2">
            <FcEmptyTrash />
            <span>Trash</span>
          </li>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
}

export default SideNavigation
