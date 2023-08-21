import { useDispatch, useSelector } from 'react-redux'
import {
  selectNextId,
  setToggleNotes,
} from '../../routes/notes-route/features/notesSlice'
import { useNavigate } from 'react-router-dom'

const ChangesSavedModal = ({ toggles, handleSaveClick }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isChangesSaved = toggles.isChangesSaved
  const nextId = useSelector(selectNextId)

  const handleSaveForwardClick = () => {
    handleSaveClick()
    dispatch(setToggleNotes({ name: 'isChangesNotSaved' }))
    navigate(`/notes/${nextId}`)
  }

  const handleNotSaveChanges = () => {
    dispatch(setToggleNotes({ name: 'isChangesNotSaved' }))
    navigate(`/notes/${nextId}`)
  }

  // console.log(nextId)
  let modalContent
  if (isChangesSaved) {
    modalContent = (
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-black/50">
        <div className="flex flex-col gap-2 p-4 bg-white">
          <p>You have not saved changes!</p>
          <div className="flex gap-2">
            <button
              className="border border-black px-4 py-2"
              onClick={handleSaveForwardClick}
            >
              Save Changes
            </button>
            <button
              className="border border-black px-4 py-2"
              onClick={handleNotSaveChanges}
            >
              Do not Save
            </button>
          </div>
        </div>
      </div>
    )
  }
  return modalContent
}

export default ChangesSavedModal
