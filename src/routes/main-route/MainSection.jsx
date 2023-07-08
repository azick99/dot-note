import Header from './Header'
import RenderingSection from './RenderingSection'

const MainSection = () => {
  return (
    <div className="flex flex-col flex-grow">
      <Header />
      <RenderingSection/>
    </div>
  )
}

export default MainSection
