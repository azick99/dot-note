import EditButton from '../buttons/EditButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { BsTrashFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { handleRemoveDirectory } from '../../utils/halper-funtions/helperFunctions'
import { useState } from 'react'
import EditDirectoryInput from '../navComponents/EditDirectoryInput'
import { Link } from 'react-router-dom'

const GeneralDirectoryList = ({ directory, layoutIndex }) => {
  const [editDirectoryId, setEditDirectoryId] = useState('')
  const dispatch = useDispatch()
  const isLayoutBigger = layoutIndex === 1 || layoutIndex === 2
  const handleRemoveClick = () => dispatch(handleRemoveDirectory(directory.id))

  const handleEditClickId = () =>
    editDirectoryId === ''
      ? setEditDirectoryId(directory.id)
      : setEditDirectoryId('')

  return (
    <div className="directory-list items-center border border-solid rounded-md p-1 px-3 relative hover:border-sky-700 transition ">
      {editDirectoryId === directory.id ? (
        <EditDirectoryInput
          content={directory}
          setEditDirectoryId={setEditDirectoryId}
          general="general"
        />
      ) : (
        <Link to={`/notes/${directory.id}`} className="w-full">
          🗒️{directory.title}
        </Link>
      )}

      {isLayoutBigger ? '' : <p>{directory.createdAt}</p>}
      <div className="general-directory-buttons-cnt">
        {isLayoutBigger ? (
          ''
        ) : (
          <p className=" col-span-2">{directory.createdBy}</p>
        )}

        <div className="flex gap-4 justify-end relative z-10">
          <EditButton
            title="general-edit"
            aria-label="edit directory title"
            onClick={handleEditClickId}
          >
            <FontAwesomeIcon icon={faPenToSquare} className="h-3 w-3" />
          </EditButton>
          <EditButton
            title="general-edit"
            aria-label="remove directory"
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
