import { MdKeyboardArrowDown } from 'react-icons/md'
import { useGeneralDropdown } from '../../hooks/useGeneralDropdown'

const ListViewDropdown = ({ selectedOption, options, onSelect }) => {
  const [toggleDropdown, handleOptionClick, dropdownRef, isOpen] =
    useGeneralDropdown(onSelect)

  return (
    <div className="relative bg-white z-10" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-1 font-semibold text-sm text-almost-dark/70 hover:text-almost-dark"
        onClick={toggleDropdown}
      >
        <span>{selectedOption.icon}</span>
        <span>{selectedOption.label} View</span>
        <MdKeyboardArrowDown className="text-slate-400" />
      </button>
      {isOpen && (
        <ul className="flex absolute mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg ">
          {options.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                className={`${
                  option.id === selectedOption.id ? 'bg-secondary' : ''
                } flex items-center gap-1 p-2 px-3 hover:bg-gray-100 w-full text-left rounded-sm`}
                onClick={() => handleOptionClick(option)}
              >
                <span>{option.icon}</span>
                <span>{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListViewDropdown
