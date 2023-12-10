import React from 'react'
import SignIn from './Authentication/SingIn'
import SignUp from './Authentication/SignUp'
import {AuthenticationContextProvider} from '../Context/AuthenticationContext'
import Form from './Authentication/Form'

export const Home = () => {
//  state_variable
//  useEffect(){

//  }
  return (
    <>
        <AuthenticationContextProvider>

            {/* <SignIn/> */}
            <SignUp/>
        </AuthenticationContextProvider>
    </>
  )
}

export default Home