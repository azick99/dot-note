import { useRef, useState } from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  addNewDirectory,
  setIsDirectoryDropdownOpen,
} from '../../routes/root-nav-route/nav-features/directoriesSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import {
  selectAllToggles,
  selectUserData,
  setToggleNotes,
} from '../../routes/notes-route/features/notesSlice'
import EditButton from '../buttons/EditButton'

const AddNewDirectoryInput = ({ directory, setDirectoryId }) => {
  const [directoryTitle, setDirectoryTitle] = useState('')
  const toggles = useSelector(selectAllToggles)
  const userData = useSelector(selectUserData)
  const username = userData ? userData?.displayName : 'unknown'

  const hasChanges = toggles.hasChanges

  const navigate = useNavigate()

  const inputRef = useRef(null)
  const dispatch = useDispatch()

  // Make it simple because I use it here a lot
  const directoryId = directory.id

  const handleAddDropdown = () => {
    dispatch(
      setIsDirectoryDropdownOpen({
        directoryId,
        name: 'addDropdown',
      })
    )
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }, 0)
  }

  const cancelDisptach = () => {
    dispatch(
      setIsDirectoryDropdownOpen({
        directoryId,
        name: 'cancelDropdown',
      })
    )
    setDirectoryTitle('')
  }

  const handleCancelBlur = () => {
    if (!directoryTitle) {
      cancelDisptach()
    }
  }

  const handleAddClick = () => {
    const id = nanoid()

    if (directoryTitle) {
      dispatch(
        addNewDirectory({ id, title: directoryTitle, directoryId, username })
      )
      dispatch(
        setIsDirectoryDropdownOpen({
          directoryId,
          name: 'cancelDropdown',
        })
      )
    }
    if (!hasChanges) {
      navigate(`/notes/${id}`)
    }
    if (hasChanges) {
      dispatch(setToggleNotes({ name: 'isChangesSaved' }))
    }
    setDirectoryTitle('')
    setDirectoryId(id)
  }

  if (directory.isAddClicked) {
    return (
      <div className="flex gap-2 pl-6 p-2">
        <input
          type="text"
          value={directoryTitle} // Use value prop to reflect the state in the input field
          onChange={(e) => setDirectoryTitle(e.target.value)}
          placeholder="Add new note..."
          onBlur={handleCancelBlur}
          ref={inputRef}
          className="bg-white border-light-grayish border-solid border-[2px] rounded-md w-[8rem] transition px-2 font-medium outline-none"
        />
        <EditButton aria-label="add new title" onClick={handleAddClick}>
          Add
        </EditButton>
        <EditButton aria-label="cancel dropdown" onClick={cancelDisptach}>
          X
        </EditButton>
      </div>
    )
  }

  return (
    <button
      type="button"
      aria-label="open add dropdown"
      className="li-directory !pl-14  flex items-center gap-2 font-semibold"
      onClick={handleAddDropdown}
    >
      <AiFillFileAdd />
      Add new {directory.file}
    </button>
  )
}

export default AddNewDirectoryInput
