import React, {useContext} from 'react'
import { URL, AUTHENTICATION_URI } from '../../Utils/ApiUrl'
import { AuthenticationContext } from '../../Context/AuthenticationContext'
import Form from '../Authentication/Form'

export const SignUp = () => {
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
        <button type="submit">Register</button>
      </div>

      </form>

    </div>
  )
}

export default SignUp