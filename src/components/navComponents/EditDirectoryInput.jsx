import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateDirectory } from '../../routes/root-nav-route/nav-features/directoriesSlice'

const EditDirectoryInput = ({ content, setEditDirectoryId }) => {
  const [contentTitle, setContentTitle] = useState(content.title)

  const dispatch = useDispatch()

  const handleEditClick = () => {
    if (contentTitle) {
      dispatch(updateDirectory({ id: content.id, title: contentTitle }))
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
      <button
        type="button"
        aria-label="add new title"
        className="flex items-center bg-white/60 rounded-md py-[1px] px-3 border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue"
        onClick={handleEditClick}
      >
        Edit
      </button>
      <button
        type="button"
        aria-label="cancel dropdown"
        className="flex items-center bg-white/60 rounded-md py-[1px] px-3 border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue"
        onClick={() => setEditDirectoryId('')}
      >
        X
      </button>
    </div>
  )
}

export default EditDirectoryInput
