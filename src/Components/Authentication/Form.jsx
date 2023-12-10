import React from 'react'

const Form = (props) => {


  return (
    <div>
      <div>
          <h1>
              <span>{props.error.message}</span> 
          </h1>
      </div>

      <div>
          <input value={props.formData.email} placeholder="Email" type="email" onChange={props.onChangeHandler} name="email" />
      </div>

      <div>
          <input value={props.formData.password} placeholder="Password" type="password" onChange={props.onChangeHandler} name="password" />
      </div>
    </div>
  )
}

export default Form