import { FcEmptyTrash } from 'react-icons/fc'
import WrapSections from '../../components/htc/WrapSections'
import Header from '../notes-route/Header'

const Trash = () => {
  return (
    <WrapSections>
    <Header directoryTitle={    <>
          <span className=" w-5 h-5 flex items-center justify-center">
            <FcEmptyTrash />
          </span>
          <p className="font-bold">Trash </p>
        </>}/>
       Uploaded
  </WrapSections>
  )
}

export default Trash