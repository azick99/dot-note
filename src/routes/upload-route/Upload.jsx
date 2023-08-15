import { FcUpload } from "react-icons/fc"
import WrapSections from "../../components/htc/WrapSections"
import Header from "../notes-route/Header"

const Upload = () => {
  return (
    <WrapSections>
      <Header directoryTitle={    <>
            <span className=" w-5 h-5 flex items-center justify-center">
              <FcUpload />
            </span>
            <p className="font-bold">Uploaded </p>
          </>}/>
         Uploaded
    </WrapSections>
  )
}

export default Upload