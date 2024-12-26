"use client"

import React from 'react'
import {redirect} from 'next/navigation'
/* import { registerUserAction } from '@/data/actions/authActions'
import { useFormState } from 'react-dom' */
import { useForm } from '@/hooks/useForm'
import { registerUserService} from '@/data/services/authService'

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}
const sendToStrapi = async (formState:RegisterUserProps) => {
  const responseData = await registerUserService(formState)
  console.log("Response data", responseData)
  if(responseData.error){
    return{
        ...formState,
        strapiErrors: responseData.errors,
        message: "We couldn't process your request. Please try again"
    }
  }

  //console.log("Registro exitoso :D", responseData.jwt)

  redirect("/")
  
  /* return {
    ...formState,
    data: "ok"
  } */
}


const SignUpForm = () => {
  const initialState = {
    username: "",
    password: "",
    email: ""
  }
  
  //const [formState, setFormState] = useFormState(registerUserAction, initialState);
  const onSubmit =  async(e: React.FormEvent) => {
    e.preventDefault();
    await sendToStrapi(formState)
  }
  
  
  const {onInputChange, formState} = useForm(initialState)

  //console.log("Hello. This is formState",formState)

  return (
    <form onSubmit={onSubmit}/* action={setFormState}  */className="w-1/2">
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
