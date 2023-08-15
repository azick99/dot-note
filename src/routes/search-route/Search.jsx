import { FcSearch } from "react-icons/fc"
import WrapSections from "../../components/htc/WrapSections"
import Header from "../notes-route/Header"

const Search = () => {
  return (
    <WrapSections>
    <Header directoryTitle={    <>
          <span className=" w-5 h-5 flex items-center justify-center">
            <FcSearch/>
          </span>
          <p className="font-bold">Trash </p>
        </>}/>
       Uploaded
  </WrapSections>
  )
}

export default Search