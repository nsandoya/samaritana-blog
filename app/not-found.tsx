import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <main className='text-center'>
      <div className='flex flex-col text-center justify-center items-center space-y-3 my-[30vh]'>
        <h2 className='text-3xl'>Sorry :'( </h2>
        <p>Your page does not exit</p>
        <Link href={"/"} >
            <button className='btn-secondary mx-auto'>Go back Home</button>
        </Link>
      </div>
    </main>
  )
}

export default NotFound
