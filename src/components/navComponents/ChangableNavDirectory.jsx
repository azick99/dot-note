import { directories } from '../../data/directories'
import { FiArrowRightCircle } from 'react-icons/fi'
const ChangableNavDirectory = () => {
  return (
    <ul className="flex flex-col">
      {directories.map((directory) => (
        <>
          <li
            key={directory.id}
            className="li-directory !pl-8 flex items-center gap-2 font-semibold"
          >
            <FiArrowRightCircle />
            <span>{directory.title}</span>
          </li>
          <ul className="flex flex-col">
            {directory.content.map((content) => (
              <li key={content.id}  className="li-directory bg-light-grayish/40 !pl-14  flex items-center gap-2 font-semibold">
                <span>🗒️{content.title}</span>
              </li>
            ))} 
          </ul>
        </>
      ))}
    </ul>
  )
}

export default ChangableNavDirectory
