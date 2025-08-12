import React, { useState } from 'react'
import Form from './Form'
import { signIn } from '../Services/UserAuthentication'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailerror, setEmailerror] = useState("")
    const [passworderror, setPassworderror] = useState("")

    const validate = () => {
        let validate = true
        setEmailerror("")
        setPassworderror("")
        if(email.trim() === ""){
            setEmailerror("Email Can't be blank")
            validate = false;
        }

        if(password.trim() === ""){
            setPassworderror("Password Can't be blank")
            validate = false;
        }
        return validate
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        if(validate()){
            const resp = await signIn({ user :{
                email: email,
                password: password
                }
            })
            console.log(resp)
        }
    }
  return (
    <div>
        <h4>Sign In</h4>
        <form onSubmit={submitHandler}>
            <Form email={email} password={password} setEmail={setEmail} setPassword={setPassword} emailerror={emailerror} passworderror={passworderror}/>
            <div>
                <button type='submit'>SignIn</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn