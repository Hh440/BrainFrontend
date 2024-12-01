
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/Plus'
import { ShareIcon } from './icons/Share'

function App() {
 

  return (
    <>
      <Button startIcon={<ShareIcon size={"lg"}/>} size="sm" variant="primary" text="Send"/>
      <Button startIcon={<PlusIcon size={"lg"}/>} size="sm" variant="secondary" text="Add the Link"/>
      
      
    </>
  )
}

export default App
