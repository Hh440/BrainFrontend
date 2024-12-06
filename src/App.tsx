
import './App.css'
import { DashBoard } from './pages/DashBoard'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Test } from './pages/Test'




function App() {


  
 

  return (
   <BrowserRouter>
      <Routes>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='/signin' element={<SignIn/>}/>
         <Route path='/dashboard'  element={<DashBoard/>}/>
         <Route path ='/test'  element={<Test/>}/>

      </Routes>
   </BrowserRouter>
  )
}

export default App
