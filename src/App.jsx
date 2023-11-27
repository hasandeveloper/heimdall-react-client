import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  Home  from './Components/Home'
import SingIn  from './Components/Authentication/SingIn'
import SignOut  from './Components/Authentication/SignOut'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sign_in" element={<SingIn/>}/>
            <Route path="/sign_out" element={<SignOut/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App