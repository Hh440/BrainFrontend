import { BACKEND_URL } from "../../Config";
import {  DeleteIcon } from "../../icons/Delete";
import axios from "axios";
import { YoutTube } from "../../icons/YouTube";
import { Twitter } from "../../icons/Twiiter";
import { ExteranlLink } from "../../icons/ExteranlLink";


export interface CardProps{
    id:number,
    title: string;
    link:string;
    type:"twitter"|"youtube";
    tags: { id:number,title: string }[];
}


export const Card = ({ id,title,link,type,tags}:CardProps)=>{

    async function handleDelete(id:number){
        await axios.delete(`${BACKEND_URL}/api/v1/content`,{
            params:{
                id:id
            },
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })

        alert(`${id} deleted`)

    }

    return (
        <div>
            <div className="p-4 bg-white rounded-md  shadow-md  border-gray-200 border max-w-72  min-h-48 min-w-72">
                <div className="flex justify-between ">
                    <div className="flex items-center text-md">
                        <div className=" text-gray-500">
                               {type==="youtube"?<YoutTube/>:<Twitter/>}
                        </div>

                        <div className="pl-2    ">
                            {title}
                        </div>
                        
                    </div>
                    <div className="flex items-center">

                        <div className="pr-2 text-gray-500">
                            <a href={link} target="_blank">
                                <ExteranlLink/>
                            </a>
                            
                        </div>

                    
                        <div className=" text-gray-500 cursor-pointer" onClick={()=>handleDelete(id)}>
                            <DeleteIcon/>
                        </div>
                        
                        
                    </div>

                </div>

                <div className="pt-4">

                    {type==="youtube" && <iframe  className="w-full" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    
                    }


                    {type==="twitter" && <blockquote className="twitter-tweet">
                     <a href={link.replace("x.com","twitter.com")}></a>
                   </blockquote>}     
                </div>
                <div className="flex gap-4 pt-4">
                {tags.map((tag) => (
                        <div
                            key={tag.id} 
                            className="bg-gray-700 rounded-full p-2 text-white "
                        >
                            {tag.title}
                        </div>
                    ))}

                </div>

              

               
            </div>

        </div>
    )

}