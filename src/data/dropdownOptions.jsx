import { BiGridSmall, BiSolidGridAlt } from 'react-icons/bi'
import { IoListSharp } from 'react-icons/io5'

export const listOptions = [
  { id: 0, icon: <IoListSharp />, label: 'List' },
  { id: 1, icon: <BiGridSmall />, label: 'Medium' },
  { id: 2, icon: <BiSolidGridAlt />, label: 'Large' },
  // Add more list view options as needed
]

export const newAddOptions = [
  { id: '0', title: '🗒️Notes' },
  { id: '1', title: '🎒To-Do' },
  { id: '2', title: '🗃️Git Hub MarkDown' },
]
