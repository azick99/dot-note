import { useSelector } from 'react-redux'
import RenderingSection from './RenderingSection'
import { useParams } from 'react-router'
import { selectAllDirectories } from '../root-nav-route/nav-features/directoriesSlice'
import WrapSections from '../../components/htc/WrapSections'

const Directory = () => {
  const { id } = useParams()
  const directories = useSelector(selectAllDirectories)
  const content = directories.find((d) => d).content.find((c) => c.id == id)

  return (
    <WrapSections>
      <RenderingSection content={content} />
    </WrapSections>
  )
}

export default Directory
