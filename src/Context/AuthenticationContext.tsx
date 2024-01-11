import React, { createContext, useState } from 'react';
import axios from 'axios';

interface Auth {
  email: string;
  password: string;
  subdomain: string;
}

interface Error {
  message: string;
}

interface AuthenticationContextInterface {
  formData: Auth;
  error: Error;
  signInHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  signUpHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AuthenticationContext = React.createContext<AuthenticationContextInterface>({} as AuthenticationContextInterface)

export const AuthenticationContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const [formData, setFormData] = useState<Auth>({
    email: "",
    password: "",
    subdomain: ""
  })

  const [error, setError] = useState<Error>({
    message: ""
  })

  //onChange handler
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
          ...formData, // means accept all form data
          [e.target.name]: e.target.value
      })
  }
  const signInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle sign in logic
  }
  
  const signUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // handle sign up logic
  }

  return (
      <AuthenticationContext.Provider value={{signUpHandler, formData, error, onChangeHandler, signInHandler}}>
        {children}
      </AuthenticationContext.Provider>
  )
}
