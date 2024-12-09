
import { useState,useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/Plus'
import { ShareIcon } from '../icons/Share'
import { SideBar } from '../components/ui/SIdeBar'
import axios from 'axios'
import { BACKEND_URL } from '../Config'
import { toast } from 'react-toastify'




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


export const DashBoard=()=> {


  const [modalOpen ,setModalOpen]=useState(false)


  const[contents,setContents]= useState<Content[]>([])

  useEffect(()=>{
    fetchContents()

  },[modalOpen])



  async function fetchContents(){

      try{
          const response= await axios.get(`${BACKEND_URL}/api/v1/content`, {
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          })

          setContents(response.data.content)
              

      }catch(e){
        console.log(e)
          console.error("Error fetching contents",e)
      }
  }


         
      useEffect(()=>{
          fetchContents()

          let interval= setInterval(()=>{

              fetchContents()

          },20*100)

          return ()=>{
              clearInterval(interval)
          }

      },[])


      const handleShare=async()=>{
        const response=await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
          share:true
        },{
          headers:{
            Authorization:localStorage.getItem("token")
          }
        })

        const share= response.data.hash;
         const link=`http://localhost:5173/api/v1/brain/${share}`
       

        navigator.clipboard.writeText( link)
        toast(`Link Copied`)

      }


      
  

  
 

  return (
    <div >

      <SideBar/>

      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 '>
        <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size={"md"}/>} size="sm" variant="secondary" text="Share Brain" OnClick={handleShare}/>
          <Button startIcon={<PlusIcon size={"md"}/>} size="sm" variant="primary" text="Add the Link" OnClick={()=>{setModalOpen(true)}}/>
        </div>
        
        
        <div className='flex flex-wrap gap-4 pt-4'>
          {contents.map(({ id, type, link, title, tags }) => {
                const validType = type === "twitter" || type === "youtube" ? type : "twitter";

                return <Card id={id} key={id} type={validType} link={link} title={title} tags={tags} />;
          })}
          
        
        </div>

      </div>

      


     
      
    </div>
  )
}


