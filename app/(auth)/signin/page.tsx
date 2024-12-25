import SignInForm from '@/components/forms/SignInForm'
import Link from 'next/link'
import React from 'react'

const SingIn = () => {
  return (
    <div>
      <h1>Welcome back :)</h1>
      <SignInForm />
      <span>Have an account? <Link href="/signup" className='underline text-slate-600'>Sing up</Link></span>
    </div>
  )
}

export default SingIn