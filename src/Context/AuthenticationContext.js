import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({children}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    subdomain: ""
  })
  
  const [error, setError] = useState({
    message: ""
  })

  const onChangeHandler = (e) => {

  }

  const signInHandler = (a) => {
    alert(a)
  }

  const signUpHandler = (a) => {
    alert(a)
  }

  return (
    <>
      {/* if you want to pass only single variable use like below */}
      {/* <AuthenticationContext.Provider value={signInHandler}>{children}</AuthenticationContext.Provider> */}
      <AuthenticationContext.Provider value={{signUpHandler, formData, error, onChangeHandler, signInHandler}}>{children}</AuthenticationContext.Provider>
    </>
  )
}

// 