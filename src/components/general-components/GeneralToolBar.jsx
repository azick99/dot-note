import { IoListSharp, IoSearch } from 'react-icons/io5'
import { BiGridSmall, BiSolidGridAlt } from 'react-icons/bi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ListViewDropdown from './ListViewDropdown'
import { useState } from 'react'
import CustomInput from '../navComponents/CustomInput'
import { useEffect } from 'react'

const listOptions = [
  { id: 0, icon: <IoListSharp />, label: 'List' },
  { id: 1, icon: <BiGridSmall />, label: 'Medium' },
  { id: 2, icon: <BiSolidGridAlt />, label: 'Large' },
  // Add more list view options as needed
]

const GeneralToolBar = ({
  index,
  setIndex,
  setFilteredDirectories,
  filteredDirectories,
}) => {
  const [isFilterInputOpen, setIsFilterInputOpen] = useState(false)
  const [sortOrder, setSortOrder] = useState('not-sorted') // Add this state variable
  const [filterInput, setFilterInput] = useState('')
  const handleListSelect = (selectedOption) => {
    // Handle the selected list view option
    setIndex(selectedOption.id)
  }
  const onFilterInputChange = (e) => {
    setFilterInput(e.target.value)
  }

  const handleFilterToggle = () => {
    setIsFilterInputOpen((prev) => !prev)
    setFilterInput('')
  }

  useEffect(() => {
    const newFilteredDirectories = filteredDirectories.filter((directory) =>
      directory.title.toLocaleLowerCase().includes(filterInput)
    )
    setFilteredDirectories(newFilteredDirectories)
  }, [filteredDirectories, filterInput])

  const handleSortDirectories = () => {
    // Toggle the sorting order based on sortOrder state
    const newSortOrder = sortOrder === 'not-sorted' ? 'sorted' : 'not-sorted'

    // Sort the directories based on the newSortOrder
    const sortedDirectories = [...filteredDirectories].sort((a, b) => {
      const dateA = new Date(a.createdAt)
      const dateB = new Date(b.createdAt)
      return newSortOrder === 'not-sorted' ? dateA - dateB : dateB - dateA
    })

    // Update the sortOrder and setFilteredDirectories
    setSortOrder(newSortOrder)
    setFilteredDirectories(sortedDirectories)
  }

  return (
    <div className="container flex px-2 justify-between w-full border-b border-solid border-almost-dark/70 pb-3">
      <ListViewDropdown
        selectedOption={listOptions[index]}
        options={listOptions}
        onSelect={handleListSelect}
      />
      <ul className="flex gap-3 items-center ">
        <li className="flex gap-5">
          {isFilterInputOpen ? (
            <CustomInput
              placeholder="Title..."
              value={filterInput}
              onChange={onFilterInputChange}
            />
          ) : (
            ''
          )}
          <button
            type="button"
            className="trasition text-almost-dark/70 hover:text-almost-dark"
            onClick={handleFilterToggle}
          >
            Filter
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`${sortOrder === 'sorted' ? 'text-almost-dark font-semibold':'text-almost-dark/70'} trasition  hover:text-almost-dark`}
            onClick={handleSortDirectories}
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
