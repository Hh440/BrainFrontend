import { Cross } from "../../icons/Cross"
import { Button } from "./Button"


export const CreateContentModal =({open,onClose}:any)=>{
    return(
        <div>
            {open &&

                <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">

                    <div className="flex flex-col justify-center">
                        <span className="bg-white opacity-100 p-4 rounded-md">
                           <div className="flex justify-end">
                            <div onClick={onClose } className="cursor-pointer">
                                <Cross/>
                            </div>
                              

                           </div>
                           <div className=" flex flex-col gap-2">
                            <Input  placeholder="Title" />
                            <Input placeholder="Link"/>
                            <Input placeholder="Type"/>

                           </div>

                           <div className="flex justify-center pt-2">
                           <Button variant="primary" text="Sumbit" />

                           </div>

                           
                        </span>
                    </div>

                </div> 
            
            
            
            }
        </div>
        
    )
}


function Input({onChange,placeholder}:{onChange:()=>void,placeholder:string}){
    return(
    <div>
        <input type={"text"} className="px-4 py-2 border-2 rounded m-2" placeholder={placeholder}  onChange={onChange} ></input>

    </div>
    )
}