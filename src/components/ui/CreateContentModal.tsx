import { useRef, useState } from "react"
import { Cross } from "../../icons/Cross"
import { Button } from "./Button"
import { Input } from "./Input"
import axios from "axios"
import { BACKEND_URL } from "../../Config"
import { TagSelector } from "./TagSelector"
import { Label } from "./Label"



enum ContentType{
    Youtube="youtube",
    Twitter="twitter"
}

export const CreateContentModal =({open,onClose}:any)=>{

    const titleref= useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();
    const [tags, setTags] = useState<string[]>([]);
    const [type,setType] = useState(ContentType.Youtube)

    async function addContent(){

        const title = titleref.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            title,
            link,
            type,
            tags
            
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        })


        onClose()

        

    }




    return(
        <div>
            {open &&

              <div>


                        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">

                                                
                        </div> 

                        <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">

                        <div className="flex flex-col  justify-center min-w-96">
                                <span className="bg-white opacity-100 p-4 rounded-md w-full ">
                                <div className="flex justify-end">
                                    <div onClick={onClose } className="cursor-pointer">
                                        <Cross/>
                                    </div>
                                    

                                </div>
                                <div className=" flex flex-col gap-2 pr-6">
                                    <Input reference={titleref} placeholder="Title" className={"w-full"} />
                                    <Input reference={linkRef} placeholder="Link" className={"w-full"}/>
                                </div>

                                <div className="pt-4">
                                       <Label title="Type" className={"text-slate-600 px-2 text-lg"}/>

                                        <div className="flex gap-4 justify-center pb-2">
                                        <Button text="Youtube" size="md" variant={type===ContentType.Youtube?"primary":"secondary"} OnClick={()=>{setType(ContentType.Youtube)}}/>
                                        <Button text="Twitter" size="md" variant={type===ContentType.Twitter?"primary":"secondary"}  OnClick={()=>{setType(ContentType.Twitter)}}/>


                                        </div>
                                    
                                </div>

                                <div className="pt-4 pr-6 px-2">
                                    <Label title="Add Tags" className={"text-slate-600 text-lg px-2"}/>
                                    <div className="pt-2">
                                        <TagSelector onChange={setTags}/>
                                    </div>
                                    
                                </div>

                                <div className="flex justify-center pt-4">
                                <Button OnClick={addContent} variant="primary" text="Sumbit" />

                                </div>

                                
                                </span>
                            </div>

                           
                        </div> 
                      


                </div>
            
            
            
            }
        </div>
        
    )
}


