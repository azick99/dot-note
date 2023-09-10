import { useDispatch, useSelector } from 'react-redux'
import {
  selectNavigateToId,
  setToggleNotes,
} from '../../routes/notes-route/features/notesSlice'
import { useNavigate } from 'react-router-dom'

const ChangesSavedModal = ({ toggles, handleSaveClick }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const navigateId = useSelector(selectNavigateToId)
  const isChangesSaved = toggles.isChangesSaved
  
  const handleSaveForwardClick = () => {
    handleSaveClick()
    navigate(navigateId)
    dispatch(setToggleNotes({ name: 'isChangesNotSaved' }))
  }

  const handleNotSaveChanges = () => {
    dispatch(setToggleNotes({ name: 'isChangesNotSaved' }))
    dispatch(setToggleNotes({ name: 'hasNoChanges' }))
    navigate(navigateId)
  }

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
