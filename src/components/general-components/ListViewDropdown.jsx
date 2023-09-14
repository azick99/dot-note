import { useState, useRef, useEffect } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

const ListViewDropdown = ({ selectedOption, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    onSelect(option)
    setIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
            <li key={option.value}>
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
