import React, {useState, createContext} from 'react';
import { Auth, Error, AuthenticationContextInterface } from "../Components/Typings/Authentication";
import {URL, AUTHENTICATION_URI, SIGN_NIN_URI} from '../Utils/ApiUrl'
import axios, {AxiosError} from "axios";
import { useNavigate } from "react-router-dom";

export const AuthenticationContext = createContext<AuthenticationContextInterface>({} as AuthenticationContextInterface)

export const AuthenticationContextProvider: React.FC<React.PropsWithChildren> = ({children}) => {

  const [formData, setFormData] = useState<Auth>({
    email: "",
    password: "",
    subdomain: ""
  })
  const [error, setError] = useState<Error>({
    message: ""
  })

    const navigate = useNavigate()

    const signUpUser = async<T extends Auth>(formData: T): Promise<void> => {

        try{
            const response = await
            axios.post(`${URL}${AUTHENTICATION_URI}`,{
                user: {
                    email: formData.email,
                    password: formData.password,
                    subdomain: formData.subdomain
                }
            })
            if(response.status === 200){
                localStorage.setItem('token', response.headers['authorization'])
                navigate("/Home")
            }
        }catch (e){
            const axiosError = e as AxiosError;  // We type cast `e` to `AxiosError`

            if(axiosError.response?.status === 422){
                const errorMessageData = axiosError.response.data as { message: string };
                setError({
                    message: errorMessageData.message
                })
            }else{
                setError({
                    message: "Something went wrong"
                })
            }
        }
    }

    const signInUser = async () => {
      try{
          const response = await
          axios.post(`${URL}${AUTHENTICATION_URI}${SIGN_NIN_URI}`, {
              user: {
                  email: formData.email,
                  password: formData.password
              }
          })
          if(response.status === 200){
              localStorage.setItem('token', response.headers['authorization'])
              navigate("/Home")
          }
      }catch(e){
          const axiosError = e as AxiosError;  // We type cast `e` to `AxiosError`

          if(axiosError.response?.status === 422){
              const errorMessageData = axiosError.response.data as { message: string };
              setError({
                  message: errorMessageData.message
              })
          }else{
              setError({
                  message: "Something went wrong"
              })
          }
      }
    }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
          ...formData, // means accept all form data
          [e.target.name]: e.target.value
      })
  }

  const signInHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger;
    signInUser()
    // handle sign in logic
  }

  const signUpHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpUser(formData)
  }

  return (
      <AuthenticationContext.Provider value={{signUpHandler, formData, error, onChangeHandler, signInHandler}}>
        {children}
      </AuthenticationContext.Provider>
  )
}
