import React, {useContext} from 'react'
import { AuthenticationContext } from '../../Context/AuthenticationContext'
import Form from './Form'

export const SignUp: React.FC = () => {
  const {signUpHandler, formData, error, onChangeHandler} = useContext(AuthenticationContext)

  return (
    <div>
      <h1>
        SignUp
      </h1>

      <form onSubmit={signUpHandler}>
          <Form formData={formData}
                error={error}
                onChangeHandler={onChangeHandler}
          />
      <div>
        <input value={formData.subdomain} placeholder="Subdoomain" type="text" onChange={onChangeHandler} name="subdomain" />
      </div>

      <div>
        <button type="submit">Sign Up</button>|<a href="/sign_in">Sign In?</a>
      </div>

      </form>
    </div>
  )
}

export default SignUp