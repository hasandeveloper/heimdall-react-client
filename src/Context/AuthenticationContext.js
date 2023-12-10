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

    //onChange handler
    const onChangeHandler = (e) => {
      setFormData({
          ...formData, //means accept all form data
          //for below meaning let say email="fa@gmail.com"
          [e.target.name]: e.target.value,
      })
  }

  const signInHandler = (a) => {
    alert(a)
  }

  const signUpHandler = (a) => {
    debugger
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