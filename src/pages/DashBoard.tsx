
import { useState,useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { Card, CardProps } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/Plus'
import { ShareIcon } from '../icons/Share'
import { SideBar } from '../components/ui/SIdeBar'
import axios from 'axios'
import { BACKEND_URL } from '../Config'




interface Tag {
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



  async function fetchContents(){

      try{
          axios.get(`${BACKEND_URL}/api/v1/content`, {
              headers: {
                  Authorization: localStorage.getItem("token")
              }
          })
              .then(response => {
                  setContents(response.data.content);
                  
              })

      }catch(e){
          console.error("Error fetching contents",e)
      }
  }


          useEffect(() => {   
              console.log(contents); 
          }, [contents]); 

      useEffect(()=>{
          fetchContents()

          let interval= setInterval(()=>{

              fetchContents()

          },10*100)

          return ()=>{
              clearInterval(interval)
          }

      },[])

  

  
 

  return (
    <div >

      <SideBar/>

      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 '>
        <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size={"md"}/>} size="sm" variant="secondary" text="Share Brain" />
          <Button startIcon={<PlusIcon size={"md"}/>} size="sm" variant="primary" text="Add the Link" OnClick={()=>{setModalOpen(true)}}/>
        </div>
        
        
        <div className='flex flex-wrap gap-4 pt-4'>
          {contents.map(({id,type,link,title,tags})=><Card id={id} key={link} type={type} link={link} title={title} tags={tags}/>
          
          
          )}
          
        
        </div>

      </div>

      


     
      
    </div>
  )
}


