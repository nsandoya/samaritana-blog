"use client"

import React from 'react'
import { registerUserAction } from '@/data/actions/authActions'
import { useFormState } from 'react-dom'
import { useForm } from '@/hooks/useForm'

const initialState = {
  username: "",
  password: "",
  email: ""
}

const SignUpForm = () => {
  //const [formState, setFormState] = useFormState(registerUserAction, initialState);

  const {onInputChange, formState} = useForm(initialState)

  console.log("Hello. This is formState",formState)

  return (
    <form /* onSubmit={handleSubmit=} *//* action={setFormState}  */className="w-1/2">
      <label>
        <span>Name</span>
        <input
          required 
          name="username"
          type="text"
          onChange={onInputChange}
          /* onChange={(e) => setTitle(e.target.value)} */
          /* value={title} */
        />
      </label>
      <label>
        <span>Email</span>
        <input
          required 
          name="email"
          type="email"
          onChange={onInputChange}

          /* onChange={(e) => setTitle(e.target.value)} */
          /* value={title} */
        />
      </label>
      <label>
        <span>Password</span>
        <input 
          required
          name="password"
          type="password"
          onChange={onInputChange}

          /* onChange={(e) => setBody(e.target.value)}
          value={body} */
        />
      </label>
      <button 
        className="btn-primary" 
        type="submit"
        /* disabled={isLoading} */
      >
      Sign up
    </button>
    </form>
  )
}

export default SignUpForm
