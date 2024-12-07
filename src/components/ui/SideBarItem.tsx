import { ReactElement } from "react"
import { useNavigate } from "react-router-dom";



export const SiderBarItem= ({text,icon}:{
    text: string,
    icon:ReactElement;
})=>{

    const navigate= useNavigate()


    const handleClick=(text:string)=>{

        navigate(`/display/${text}`,{state:{text:text}})


        
    }






    return(
        <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all " onClick={()=>handleClick(text)}>

            <div className="pr-2">
                {icon}

            </div>

            <div className="pl-4">
                {text}
            </div>
             

        </div>
    )
}