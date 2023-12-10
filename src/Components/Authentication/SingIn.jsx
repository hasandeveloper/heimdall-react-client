import React, { useContext } from 'react'
import { AuthenticationContext } from '../../Context/AuthenticationContext'
import { URL, AUTHENTICATION_URI } from '../../Utils/ApiUrl'

export const SingIn = () => {
    // if you getting single variable/state/function from AuthenticationContext.js then use like below
    // const signInHandler = useContext(AuthenticationContext)

    const signInHandler = useContext(AuthenticationContext)
    
  return (
    <div>
        <h1>
            Login
        </h1>

        <form onSubmit={signInHandler}>

        </form>
        
    </div>
  )
}

export default SingIn