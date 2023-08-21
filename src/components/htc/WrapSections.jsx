import { useSelector } from "react-redux"
import { selectAllToggles } from "../../routes/notes-route/features/notesSlice"

const WrapSections = ({ children }) => {
    const toggles = useSelector(selectAllToggles)
    const isSidebarOpen = toggles.isSidebarOpen
  return (
    <div
      className={`flex flex-col ${
        isSidebarOpen ? 'col-span-11 ' : 'col-span-9'
      } w-full h-[30rem]`}
    >
      {children}
    </div>
  )
}

export default WrapSections
