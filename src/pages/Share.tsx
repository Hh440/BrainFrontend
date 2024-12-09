import axios from "axios"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { BACKEND_URL } from "../Config"
import { Card } from "../components/ui/Card"
import { NavBar } from "../components/ui/NavBar"
import { Logo } from "../icons/Logo"

interface Tag {
    id:number,
    title: string;
  }
  
  interface Content {
    id:number;
    title: string;
    link: string;
    tags: Tag[]; 
    type: string;
  }

export const Share= ()=>{
    const shareLink= useParams()
    const[contents,setContents]= useState<Content[]>([])


    const fetchContent = async()=>{

        const response= await axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink.shareLink}`)
        
        setContents(response.data.content)

    }
    useEffect(()=>{

        fetchContent()
    },[shareLink.shareLink])
    return(
        <div className="w-screen h-screen bg-gray-300 pl-7 pt-8">
            
            <div className="flex gap-2 items-center">
                <div className="text-blue-700">
                    <Logo/>
                </div>
                <div className="text-3xl">
                    SecondBrain
                </div>
            </div>


             <div className='flex flex-wrap gap-4 pt-8'>
                    {contents.map(({ id, type, link, title, tags }) => {
                            const validType = type === "twitter" || type === "youtube" ? type : "twitter";

                            return <Card id={id} key={id} type={validType} link={link} title={title} tags={tags} />;
                    })}
                    
        
            </div>

           


            
           
        </div>
    )
}