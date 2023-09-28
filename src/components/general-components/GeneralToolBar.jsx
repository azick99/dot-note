import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import ListViewDropdown from './ListViewDropdown'
import { useState } from 'react'
import CustomInput from '../navComponents/CustomInput'
import { useEffect } from 'react'
import { listOptions } from '../../data/dropdownOptions'
import GeneralAddNewDropdown from './GeneralAddNewDropdown'

const GeneralToolBar = ({
  optionsIndex,
  setOptionsIndex,
  setFilteredDirectories,
  filteredDirectories,
}) => {
  const [isFilterInputOpen, setIsFilterInputOpen] = useState(false)
  const [sortOrder, setSortOrder] = useState('not-sorted') // Add this state variable
  const [filterInput, setFilterInput] = useState('')

  const handleListSelect = (selectedOption) => {
    // Handle the selected list view option
    setOptionsIndex({
      ...optionsIndex,
      layoutIndex: selectedOption.id,
    })
  }

  const handleAddNewSelect = (selectedOption) => {
    setOptionsIndex({
      ...optionsIndex,
      newTaskIndex: selectedOption.id,
    })
  }
  const { layoutIndex } = optionsIndex

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

  {
    /*listOptions on data folder*/
  }

  return (
    <div className="container flex px-2 justify-between w-full border-b border-solid border-almost-dark/70 pb-3">
      <ListViewDropdown
        selectedOption={listOptions[layoutIndex]}
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
            className={`${
              sortOrder === 'sorted'
                ? 'text-almost-dark font-semibold'
                : 'text-almost-dark/70'
            } trasition  hover:text-almost-dark`}
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
        <GeneralAddNewDropdown onSelect={handleAddNewSelect} />
      </ul>
    </div>
  )
}

export default GeneralToolBar
