import { useSelector } from 'react-redux'
import Header from './Header'
import RenderingSection from './RenderingSection'
import { selectAllDirectories } from '../root-nav-route/directoriesSlice'
import { useParams } from 'react-router'

const Directory = () => {
  const { id } = useParams()
  const directories = useSelector(selectAllDirectories)
  const content = directories.find((d) => d).content.find((c) => c.id === id)

  return (
    <div className="flex flex-col flex-grow">
      <Header content={content} />
      <RenderingSection content={content} />
    </div>
  )
}

export default Directory
