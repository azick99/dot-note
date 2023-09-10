import { NavLink } from 'react-router-dom'
import { directories } from '../../data/readOnlyNav'


const StableNavDirectory = ({ hasChanges, handleModalDropdown }) => {
  return (
    <ul className="directory ">
      {directories.map((directory) =>
        hasChanges ? (
          <li
            key={directory.id}
            className="li-directory flex items-center gap-3 "
            onClick={() => handleModalDropdown(directory.link)}
          >
            <span>{directory.icon}</span>
            <span>{directory.title}</span>
          </li>
        ) : (
          <NavLink
            to={directory.link}
            key={directory.id}
            className="li-directory flex items-center gap-3 "
          >
            <span>{directory.icon}</span>
            <span>{directory.title}</span>
          </NavLink>
        )
      )}
    </ul>
  )
}

export default StableNavDirectory
