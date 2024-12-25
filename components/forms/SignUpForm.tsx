"use client"

import React from 'react'
import {redirect} from 'next/navigation'
import { registerUserAction } from '@/data/actions/authActions'
import { useFormState } from 'react-dom'
import { useForm } from '@/hooks/useForm'
import { registerUserService } from '@/data/services/authService'

import {cookies} from 'next/headers';

// Cookies config
const config = {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    domain: process.env.NEXT_STRAPI_API_BASE_URL,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production"
}

const sendToStrapi = async (formState: any) => {
  const responseData = await registerUserService(formState)
  console.log("Response data", responseData)
  if(responseData.error){
    return{
        ...formState,
        strapiErrors: responseData.errors,
        message: "We couldn't process your request. Please try again"
    }
  }

  (await cookies()).set("jwt", responseData.jwt, config);
  redirect("/")
  
  //console.log("Registro exitoso :D", responseData.jwt)
  
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
