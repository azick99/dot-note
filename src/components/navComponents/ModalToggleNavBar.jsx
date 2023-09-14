import { useDispatch } from 'react-redux'
import { setToggleNotes } from '../../routes/notes-route/features/notesSlice'
import { handleNavigateToId } from '../../utils/halper-funtions/helperFunctions'

const ModalToggleNavBar = ({ content, directoryId,setDirectoryId}) => {
  const dispatch = useDispatch()
  const handleModalDropdown = () => {
    dispatch(setToggleNotes({ name: 'isChangesSaved' }))
    setDirectoryId(content.id)
    //helperFunction.js
    handleNavigateToId(`notes/${content.id}`, dispatch)
  }

  return (
    <li
      className={`li-directory 
       !pl-14 bg flex items-center gap-2 cursor-pointer font-semibold ${
         content.id === directoryId ? 'bg-light-grayish/40' : ''
       }`}
      aria-label="user navbar"
      onClick={handleModalDropdown}
    >
      <div className="w-[10rem] h-[1.5rem] overflow-x-auto">
        🗒️{content.title}
      </div>
    </li>
  )
}

export default ModalToggleNavBar
