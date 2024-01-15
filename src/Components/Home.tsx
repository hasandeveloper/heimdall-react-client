import React from 'react'
import SignIn from './Authentication/SingIn'
import SignUp from './Authentication/SignUp'
import {AuthenticationContextProvider} from '../Context/AuthenticationContext'
import Form from './Authentication/Form'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const Home: React.FC = () => {
//  state_variable
//  useEffect(){

//  }
  return (
    <>

            <QueryClientProvider client={queryClient}>
                <AuthenticationContextProvider>
            {/* <SignIn/> */}
                <SignUp/>
                </AuthenticationContextProvider>
            </QueryClientProvider>

    </>
  )
}

export default Home