import React, { useContext } from 'react'
import { AuthenticationContext } from '../../Context/AuthenticationContext'
import Form from "./Form"

const SingIn: React.FC = () => {
  const { signInHandler, formData, error, onChangeHandler } =  useContext(AuthenticationContext)

  return (
      <div>
          <h1>Login</h1>
          <form onSubmit={signInHandler}>
            <Form formData={formData} error={error} onChangeHandler={onChangeHandler}/>
              <div>
                  <button type="submit">Login</button>
                  <a href="/sign_up">Sign Up</a>
              </div>
          </form>
      </div>
  )
}

export default SingIn