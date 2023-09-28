import WrapSections from '../../components/htc/WrapSections'
import Header from '../notes-route/Header'
import GeneralSection from './GeneralSection'
import { FcHome } from 'react-icons/fc'

const General = () => {
  return (
    <WrapSections>
      <Header
        directoryTitle={
          <>
            <span className="bg-light-grayish/30 rounded-md w-5 h-5 flex items-center justify-center">
              <FcHome />
            </span>
            <h1 className="font-bold">General </h1>
          </>
        }
      />
      <GeneralSection />
    </WrapSections>
  )
}

export default General
