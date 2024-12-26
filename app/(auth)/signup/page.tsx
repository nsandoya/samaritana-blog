import SignUpForm from '@/components/forms/SignUpForm'
import Link from 'next/link'
import React from 'react'

const strapiApiUrl = process.env.NEXT_PUBLIC_API_URL;
const url = `${strapiApiUrl}/api/connect/google`

const SingUp = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Create a new account :)</h1>
      <div className='flex flex-col items-center justify-center'>or
        <Link href={url}>
          <button className='btn-secondary'>Sign up with google</button>
        </Link>
        <br></br>
      </div>
      <br></br>
      <SignUpForm />
      <span>Have an account? <Link href="/signin" className='underline text-slate-600'>Sing in</Link></span>
    </div>
  )
}

export default SingUp
