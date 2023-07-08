import { FcHome } from 'react-icons/fc'
import {BsTrashFill} from 'react-icons/bs'
import {IoIosSave} from 'react-icons/io'
const Header = () => {
  return (
    <header id="header" className="p-5 flex items-center justify-between w-full h-[70px]">
      <div className="flex gap-2 items-center">
        <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
          <FcHome />
        </span>
        <p>General / 🗒️Notes / Welcome Note </p>
      </div>
      <div className='flex justify-self-end gap-10 items-center mr-10'>
        <BsTrashFill className='w-6 h-6'/>
        <button className='flex p-2 bg-light-grayish text-white items-center gap-2 rounded-lg'>
          <IoIosSave/>
          <span>Save Changes</span>
        </button>
        <button>
          Sign in
        </button>
      </div>
    </header>
  )
}

export default Header
