"use client"

import React from 'react'

const SignInForm = () => {
  return (
    <form /* onSubmit={handleSubmit=} */ className="w-1/2">
      <label>
        <span>Email</span>
        <input
          required 
          type="email"
          /* onChange={(e) => setTitle(e.target.value)} */
          /* value={title} */
        />
      </label>
      <label>
        <span>Password</span>
        <input type="password"
          required
          /* onChange={(e) => setBody(e.target.value)}
          value={body} */
        />
      </label>
      <button 
        className="btn-primary" 
        /* disabled={isLoading} */
      >
      Sing In
    </button>
    </form>
  )
}

export default SignInForm
