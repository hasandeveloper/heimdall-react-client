import React, { useContext } from 'react'
import { AuthenticationContext } from '../../Context/AuthenticationContext'
import { URL, AUTHENTICATION_URI } from '../../Utils/ApiUrl'

const SingIn: React.FC = () => {
  const { signInHandler } = React.useContext(AuthenticationContext)

  return (
      <div>
          <h1>Login</h1>
          <form onSubmit={(e) => signInHandler(e)}>...</form>
      </div>
  )
}

export default SingIn