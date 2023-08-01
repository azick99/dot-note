import { useSelector } from 'react-redux'
import RenderingSection from './RenderingSection'
import { selectAllDirectories } from '../root-nav-route/directoriesSlice'
import { useParams } from 'react-router'
import { useContext } from 'react'
import { NavigationContext } from '../../context/navigation.context'

const Directory = () => {
  const { id } = useParams()
  const directories = useSelector(selectAllDirectories)
  const content = directories.find((d) => d).content.find((c) => c.id === id)
  const { isSidebarOpen } = useContext(NavigationContext)

  return (
    <div
      className={`flex flex-col ${
        isSidebarOpen ? 'col-span-11 ' : 'col-span-9'
      } `}
    >
      <RenderingSection content={content} />
    </div>
  )
}

export default Directory
