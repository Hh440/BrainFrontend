import { Logo } from "../../icons/Logo"
import { Twitter } from "../../icons/Twiiter"
import { YoutTube } from "../../icons/YouTube"
import { SiderBarItem } from "./SideBarItem"


export const SideBar=()=>{
    return(
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8 items-center">
                <div className="pr-4  text-purple-600">
                    <Logo/>
                </div>
                
                Brain
            </div>
            <div className="pt-8 pl-4">
                <SiderBarItem text="Twitter" icon={<Twitter/>}/>
                <SiderBarItem text="Youtube" icon={<YoutTube/>}/>

            </div>
        </div>
    )
}