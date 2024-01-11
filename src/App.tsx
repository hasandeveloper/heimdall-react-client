import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './Components/Home'
import SingIn  from './Components/Authentication/SingIn'
import SignUp  from './Components/Authentication/SignUp'


const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign_in" element={<SingIn/>}/>
            <Route path="/sign_up" element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
