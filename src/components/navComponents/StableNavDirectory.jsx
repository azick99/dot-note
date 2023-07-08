import { directories } from '../../data/readOnlyNav'

const StableNavDirectory = () => {
  return (
    <ul className="directory ">
    {directories.map((directory) => (
      <li key={directory.id} className='li-directory flex items-center gap-3 '>
        <span>{directory.icon}</span>
        <span>{directory.title}</span>
      </li>
    ))}
  </ul>
  )
}

export default StableNavDirectory