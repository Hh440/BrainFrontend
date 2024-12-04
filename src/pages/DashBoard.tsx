
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card, CardProps } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/Plus'
import { ShareIcon } from '../icons/Share'
import { SideBar } from '../components/ui/SIdeBar'
import { useContent } from '../hooks/useContent'


export const DashBoard=()=> {


  const [modalOpen ,setModalOpen]=useState(false)
  const {content}= useContent()
 

  return (
    <div >

      <SideBar/>

      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 '>
        <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size={"md"}/>} size="sm" variant="secondary" text="Share Brain" />
          <Button startIcon={<PlusIcon size={"md"}/>} size="sm" variant="primary" text="Add the Link" OnClick={()=>{setModalOpen(true)}}/>
        </div>
        
        
        <div className='flex flex-wrap gap-4'>
          {content.map(({type,link,title}:CardProps)=><Card key={link} type={type} link={link} title={title}/>
          
          
          )}
          
        
        </div>

      </div>

      


     
      
    </div>
  )
}


