import React from 'react'

const Form = (props) => {
    return (
        <div>
            <input type='text' placeholder="email" value={props.email} onChange={(e) => (props.setEmail(e.target.value))}/><br/>
            <span>{props?.emailerror}</span><br/>
            <input type='password' placeholder="password" value={props.password} onChange={(e) => (props.setPassword(e.target.value))}/><br/>
            <span>{props?.passworderror}</span><br/>
        </div>
    )
}

export default Form;