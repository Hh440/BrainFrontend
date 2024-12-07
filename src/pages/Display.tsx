import { useLocation } from "react-router-dom"
import { SideBar } from "../components/ui/SIdeBar"
import { useEffect,useState } from "react"
import { BACKEND_URL } from "../Config"
import axios from "axios"
import { Card } from "../components/ui/Card"

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

  
  
export const Display= ()=>{

    const location = useLocation()
    const[contents,setContents]= useState<Content[]>([])

    const medium = location.state.text.toLowerCase()
    const [error, setError] = useState<string | null>(null);


    


    async function fetchContent(){


        try{

            const response= await axios.get(`${BACKEND_URL}/api/v1/content/${medium}`,{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
            })
    
            setContents(response.data.content)
            setError(null);

        }catch(e){
            console.log(e)
            setError("Failed to fetch content. Please try again.");
            
        }
        

    }

    useEffect(()=>{
       

        fetchContent()

       
    },[medium])
    return (
        <div>
            <SideBar />
            <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
                {error && <div className="text-red-500">{error}</div>}
                {contents.length === 0 && !error ? (
                    <div className="flex justify-center items-center relative top-[475px]">
                         <p className="text-gray-500 text-2xl font-serif">No content available.</p>
                    </div>
                   
                ) : (
                    <div className="flex flex-wrap gap-4 pt-4">
                        {contents.map(({ id, type, link, title, tags }) => {
                        // Validate or map type
                            const validType = type === "twitter" || type === "youtube" ? type : "twitter";

                            return <Card id={id} key={id} type={validType} link={link} title={title} tags={tags} />;
                    })
                    }
                    </div>
                )}
            </div>
        </div>
    );
    
}