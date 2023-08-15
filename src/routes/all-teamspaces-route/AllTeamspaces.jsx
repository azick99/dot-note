import WrapSections from '../../components/htc/WrapSections'
import Header from '../notes-route/Header'
import { FaClipboardList } from 'react-icons/fa'

const AllTeamspaces = () => {
  return (
    <WrapSections>
    <Header directoryTitle={    <>
          <span className=" w-5 h-5 flex items-center justify-center">
            <FaClipboardList/>
          </span>
          <p className="font-bold">All Teamsapces </p>
        </>}/>
        All Teamsapces
  </WrapSections>
  )
}

export default AllTeamspaces