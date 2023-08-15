import { useRef, useState } from 'react'
import { AiFillFileAdd } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {
  addNewDirectory,
  setIsDirectoryDropdownOpen,
} from '../../routes/root-nav-route/nav-features/directoriesSlice'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

const AddNewDirectoryInput = ({ directory }) => {
  const [directoryTitle, setDirectoryTitle] = useState('')

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
      dispatch(addNewDirectory({ id, title: directoryTitle, directoryId }))
      dispatch(
        setIsDirectoryDropdownOpen({
          directoryId,
          name: 'cancelDropdown',
        })
      )
    }
    navigate(`/notes/${id}`)
    setDirectoryTitle('')
  }

  if (directory.isAddClicked) {
    return (
      <div className="flex gap-2 pl-10 p-2">
        <input
          type="text"
          value={directoryTitle} // Use value prop to reflect the state in the input field
          onChange={(e) => setDirectoryTitle(e.target.value)}
          placeholder="Add new note..."
          onBlur={handleCancelBlur}
          ref={inputRef}
          className="bg-white border-light-grayish border-solid border-[2px] rounded-md w-[8rem] transition px-2 font-medium outline-none"
        />
        <button
          type="button"
          aria-label="add new title"
          className="flex items-center bg-white/60 rounded-md py-[1px] px-3 border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue"
          onClick={handleAddClick}
        >
          Add
        </button>
        <button
          type="button"
          aria-label="cancel dropdown"
          className="flex items-center bg-white/60 rounded-md py-[1px] px-3 border-[1px] border-solid border-almost-dark/30 hover:bg-white  hover:border-light-blue"
          onClick={cancelDisptach}
        >
          X
        </button>
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
