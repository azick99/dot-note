import { FcHome } from 'react-icons/fc'
import { BsTrashFill } from 'react-icons/bs'
import { IoIosSave } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { removeDirectory } from '../root-nav-route/nav-features/directoriesSlice'
import { useNavigate } from 'react-router-dom'

const Header = ({ content, handleSaveClick, hasChanges, directoryTitle }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRemoveClick = () => {
    dispatch(removeDirectory({ contentId: content.id }))
    navigate('/general')
  }

  return (
    <header
      id="header"
      className="p-5 flex items-center justify-between w-full h-[70px]"
    >
      <div className="flex gap-2 items-center">{directoryTitle}</div>
      <div className="flex justify-self-end gap-10 items-center mr-10">
        {content && (
          <>
            <button aria-label="remove directory" onClick={handleRemoveClick}>
              <BsTrashFill className="w-6 h-6" />
            </button>
            <button
              type="button"
              className={`flex p-2 ${
                !hasChanges ? 'bg-primery/50' : 'bg-primery/90'
              }  text-white items-center gap-2 rounded-lg`}
              aria-label="save changes"
              onClick={handleSaveClick}
              disabled={!hasChanges}
            >
              <IoIosSave />
              <span>Save Changes</span>
            </button>
          </>
        )}

        <button>Sign in</button>
      </div>
    </header>
  )
}

export default Header
