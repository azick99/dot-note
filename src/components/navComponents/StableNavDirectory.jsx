import { NavLink } from 'react-router-dom'
import { directories } from '../../data/readOnlyNav'

const StableNavDirectory = () => {
  return (
    <ul className="directory ">
      {directories.map((directory) => (
        <NavLink
          to={directory.link}
          key={directory.id}
          className="li-directory flex items-center gap-3 "
        >
          <span>{directory.icon}</span>
          <span>{directory.title}</span>
        </NavLink>
      ))}
    </ul>
  )
}

export default StableNavDirectory
