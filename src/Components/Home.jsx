import React from 'react'
import SignIn from './Authentication/SingIn'
import SignOut from './Authentication/SignOut'

export const Home = () => {
  return (
    <>
        <SignIn/>
        <SignOut/>
    </>
  )
}

export default Home