import { useState } from 'react'
import { useDispatch } from 'react-redux'
import EditButton from '../buttons/EditButton'
import { handleEditDirectory } from '../../utils/halper-funtions/helperFunctions'

const EditDirectoryInput = ({ content, setEditDirectoryId, general }) => {
  const [contentTitle, setContentTitle] = useState(content.title)

  const dispatch = useDispatch()

  const handleEditClick = () => {
    if (contentTitle) {
      dispatch(handleEditDirectory(content.id, contentTitle))
    }
    setEditDirectoryId('')
  }

  const handleEditChange = (e) => setContentTitle(e.target.value)

  return (
    <div className="flex gap-2 pl-5 p-2">
      <input
        type="text"
        value={contentTitle} // Use value prop to reflect the state in the input field
        placeholder="Edit..."
        onChange={handleEditChange}
        className="bg-white border-light-grayish border-solid border-[2px] rounded-md w-[8rem] transition px-2 font-medium outline-none"
      />
      <EditButton aria-label="add new title" onClick={handleEditClick}>
        Edit
      </EditButton>
      {general ? (
        ''
      ) : (
        <EditButton
          aria-label="cancel dropdown"
          onClick={() => setEditDirectoryId('')}
        >
          X
        </EditButton>
      )}
    </div>
  )
}

export default EditDirectoryInput
