import EditButton from '../buttons/EditButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { handleRemoveDirectory } from '../../utils/halper-funtions/helperFunctions'
import { useState } from 'react'
import EditDirectoryInput from '../navComponents/EditDirectoryInput'
import { Link } from 'react-router-dom'

const GeneralDirectoryList = ({ note, index }) => {
  const [editDirectoryId, setEditDirectoryId] = useState('')
  const dispatch = useDispatch()
  const isLayoutBigger = index === 1 || index === 2
  const handleRemoveClick = () => dispatch(handleRemoveDirectory(note.id))

  const handleEditClickId = () =>
    editDirectoryId === ''
      ? setEditDirectoryId(note.id)
      : setEditDirectoryId('')

  return (
    <div className="note-list items-center border border-solid rounded-md p-1 px-3 relative hover:border-sky-700 transition ">
      {editDirectoryId === note.id ? (
        <EditDirectoryInput
          content={note}
          setEditDirectoryId={setEditDirectoryId}
          general="general"
        />
      ) : (
        <Link to={`/notes/${note.id}`}>🗒️{note.title}</Link>
      )}

      {isLayoutBigger ? '' : <p>{note.createdAt}</p>}
      <div className="grid grid-cols-3 ">
        {isLayoutBigger ? '' : <p className=" col-span-2">{note.createdBy}</p>}

        <div className="flex gap-4 justify-end relative z-10">
          <EditButton
            title="general-edit"
            aria-label="edit note title"
            onClick={handleEditClickId}
          >
            <FontAwesomeIcon icon={faPenToSquare} className="h-3 w-3" />
          </EditButton>
          <EditButton
            title="general-edit"
            aria-label="remove note"
            onClick={handleRemoveClick}
          >
            <BsTrashFill className="w-3 h-3" />
          </EditButton>
        </div>
      </div>
    </div>
  )
}

export default GeneralDirectoryList
