
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/Plus'
import { ShareIcon } from '../icons/Share'
import { SideBar } from '../components/ui/SIdeBar'


export const DashBoard=()=> {


  const [modalOpen ,setModalOpen]=useState(false)
 

  return (
    <div >

      <SideBar/>

      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2 '>
        <CreateContentModal open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
        <div className='flex justify-end gap-4'>
          <Button startIcon={<ShareIcon size={"md"}/>} size="sm" variant="secondary" text="Share Brain" />
          <Button startIcon={<PlusIcon size={"md"}/>} size="sm" variant="primary" text="Add the Link" OnClick={()=>{setModalOpen(true)}}/>
        </div>
        
        
        <div className='flex gap-4'>
          <Card type='twitter' link='https://x.com/CodePen/status/1863735978395046100' title='Tweet Tweet Twitter'/>
          <Card type='youtube' link='https://www.youtube.com/watch?v=0rtV5esQT6I' title='kpop rise'/>
          
          
        
        </div>

      </div>

      


     
      
    </div>
  )
}


