import { FcSettings } from "react-icons/fc"
import WrapSections from "../../components/htc/WrapSections"
import Header from "../notes-route/Header"

const Settings = () => {
  return (
    <WrapSections>
    <Header directoryTitle={    <>
          <span className=" w-5 h-5 flex items-center justify-center">
            <FcSettings/>
          </span>
          <p className="font-bold">Settings</p>
        </>}/>
      Settings
  </WrapSections>
  )
}

export default Settings