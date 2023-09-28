import { MdKeyboardArrowDown } from 'react-icons/md'
import { newAddOptions } from '../../data/dropdownOptions'
import { useGeneralDropdown } from '../../hooks/useGeneralDropdown'

const GeneralAddNewDropdown = ({ onSelect}) => {
  const [toggleDropdown, handleOptionClick, dropdownRef, isOpen] =
    useGeneralDropdown(onSelect)

  return (
    <li className="relative bg-white z-30" ref={dropdownRef}>
      <button
        type="button"
        className="flex p-2 hover:bg-primery bg-primery/80 text-white items-center rounded-md text-sm transition"
        onClick={toggleDropdown}
      >
        <span className=" border-r border-white pr-2" onClick={toggleDropdown}>
          New
        </span>
        <MdKeyboardArrowDown className="ml-1" />
      </button>
      {isOpen && (
        <ul className="flex flex-col gap-3 absolute mt-2 p-2 right-0 bg-white border border-gray-300 rounded shadow-lg  w-40 ">
          {newAddOptions.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                className="flex flex-col text-center items-center gap-1 p-2 px-3 hover:bg-gray-100 w-full rounded-sm border border-almost-dark/40"
                onClick={() => handleOptionClick(option)}
              >
                <span>Add New</span>
                <span className="">{option.title}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default GeneralAddNewDropdown
