import SignUpForm from '@/components/forms/SignUpForm'
import Link from 'next/link'
import React from 'react'

const SingUp = () => {
  return (
    <div>
      <h1>Create a new account :)</h1>
      <SignUpForm />
      <span>Have an account? <Link href="/signin" className='underline text-slate-600'>Sing in</Link></span>
    </div>
  )
}

export default SingUp
