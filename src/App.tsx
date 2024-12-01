
import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/plus'

function App() {
 

  return (
    <>
      <Button startIcon={<PlusIcon/>} size="sm" variant="primary" text="Send"/>
      <Button size="sm" variant="secondary" text="Add the Link"/>
      
      
    </>
  )
}

export default App
