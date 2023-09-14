import { IoListSharp, IoSearch } from 'react-icons/io5'
import { BiGridSmall, BiSolidGridAlt } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ListViewDropdown from './ListViewDropdown'

const listOptions = [
  { id: 0, icon: <IoListSharp />, label: 'List' },
  { id: 1, icon: <BiGridSmall />, label: 'Medium' },
  { id: 2, icon: <BiSolidGridAlt />, label: 'Large' },
  // Add more list view options as needed
]

const GeneralToolBar = ({index, setIndex}) => {


  const handleListSelect = (selectedOption) => {
    // Handle the selected list view option
    setIndex(selectedOption.id)
  }

  return (
    <div className="container flex px-2 justify-between w-full border-b border-solid border-almost-dark/70 pb-3">
      <ListViewDropdown
        selectedOption={listOptions[index]}
        options={listOptions}
        onSelect={handleListSelect}
      />
      <ul className="flex gap-3 items-center ">
        <li>
          <button
            type="button"
            className="trasition text-almost-dark/70 hover:text-almost-dark"
          >
            Filter
          </button>
        </li>
        <li>
          <button
            type="button"
            className="trasition text-almost-dark/70 hover:text-almost-dark"
          >
            Sort
          </button>
        </li>
        <li>
          <Link
            to="/search"
            className="trasition text-almost-dark/70 hover:text-almost-dark"
          >
            <IoSearch />
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="flex p-2 hover:bg-primery  bg-primery/80 text-white items-center rounded-md text-sm transition"
          >
            <span className=" border-r border-white pr-2">New</span>
            <MdKeyboardArrowDown className="ml-1" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default GeneralToolBar
