import React, { useState } from 'react'
import { signIn, signUp } from '../../Services/UserAuthentication'
import { useNavigate } from "react-router-dom";

const Form = (type) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailerror, setEmailerror] = useState("")
    const [passworderror, setPassworderror] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

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
            if(type.type === 'sign_in' ){
                var resp = await
                signIn({ user :{
                    email: email,
                    password: password
                    }
                })
            }else if(type.type === 'sign_up'){
                var resp = await
                signUp({ user :{
                    email: email,
                    password: password
                    }
                })
            }

            if(resp.status === 200){
                const token = resp.headers.get('Authorization');
                localStorage.setItem('token', token)
                navigate("/");
            }else{
                resp.json().then(resp => {
                    setError({message: resp.message})
                    console.log(resp.message)
               });
            }
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <span>{error.message}</span><br/>
                <input type='text' placeholder="email" value={email} onChange={(e) => (setEmail(e.target.value))}/><br/>
                <span>{emailerror}</span><br/>
                <input type='password' placeholder="password" value={password} onChange={(e) => (setPassword(e.target.value))}/><br/>
                <span>{passworderror}</span><br/>
            </div>
            <div>
                <button type='submit'>{type.type === 'sign_in' ? "SignIn" : "SignUp"}</button>
            </div>
        </form>
    )
}

export default Form;