"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log para depurar el error
    console.error(error);
  }, [error]);

  return (
    <main className='text-center'>
      <div className='flex flex-col text-center justify-center items-center space-y-3 my-[30vh]'>
        <h2 className='text-3xl text-red-500'>Something went wrong!</h2>
        <p>{error?.message || 'An unexpected error occurred.'}</p>
        <button
          onClick={() => reset()} 
          className='btn-secondary mx-auto'
        >
          Try again
        </button>
        <Link href='/'>
          <button className='btn-secondary mx-auto'>Go back Home</button>
        </Link>
      </div>
    </main>
  );
}