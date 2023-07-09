import { Link } from 'react-router-dom'
import { directories } from '../../data/readOnlyNav'

const StableNavDirectory = () => {
  return (
    <ul className="directory ">
      {directories.map((directory) => (
        <Link
          to={directory.link}
          key={directory.id}
          className="li-directory flex items-center gap-3 "
        >
          <span>{directory.icon}</span>
          <span>{directory.title}</span>
        </Link>
      ))}
    </ul>
  )
}

export default StableNavDirectory
