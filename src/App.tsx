
import './App.css'
import { DashBoard } from './pages/DashBoard'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Test } from './pages/Test'
import { Display } from './pages/Display'
import { Home } from './pages/Home'




function App() {


  
 

  return (
   <BrowserRouter>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='/signin' element={<SignIn/>}/>
         <Route path='/dashboard'  element={<DashBoard/>}/>
         <Route path ='/test'  element={<Test/>}/>
         <Route path='/display/:media' element={<Display/>}/>

      </Routes>
   </BrowserRouter>
  )
}

export default App
