import { FcClock } from "react-icons/fc"
import WrapSections from "../../components/htc/WrapSections"
import Header from "../notes-route/Header"

const Updated = () => {
  return (
    <WrapSections>
    <Header directoryTitle={    <>
          <span className=" w-5 h-5 flex items-center justify-center">
            <FcClock />
          </span>
          <p className="font-bold">Updated</p>
        </>}/>
      Updated
  </WrapSections>
  )
}

export default Updated