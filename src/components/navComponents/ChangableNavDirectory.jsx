import { Link } from 'react-router-dom'
import { directories } from '../../data/directories'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Fragment } from 'react'
const ChangableNavDirectory = () => {
  return (
    <ul className="flex flex-col">
      {directories.map((directory) => (
        <Fragment key={directory.id}>
          <Link
            to={directory.link}
            className="li-directory !pl-8 flex items-center gap-2 font-semibold"
          >
            <FiArrowRightCircle />
            <span>{directory.title}</span>
          </Link>
          <ul className="flex flex-col">
            {directory.content.map((content) => (
              <li
                key={content.id}
                className="li-directory bg-light-grayish/40 !pl-14  flex items-center gap-2 font-semibold"
              >
                <span>🗒️{content.title}</span>
              </li>
            ))}
          </ul>
        </Fragment>
      ))}
    </ul>
  )
}

export default ChangableNavDirectory
