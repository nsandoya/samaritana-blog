import Link from 'next/link'
import React from 'react';

import LogoutBtn from './LogoutBtn'

const Navbar = () => {
    const paths = [
        {text: "Home", href:"/"},
        {text: "Blog posts", href:"/"},
        {text: "Reviews", href:"/reviews"}
    ]
    return (
        <div className='flex flex-rows items-center'>
            {paths.map(({text, href}) => (
                <div className="mx-4">
                    <Link href={href} key={text}>{text}</Link>
                </div>
            ))}
            <div className='ml-auto text-right'>
                <LogoutBtn />
            </div>
        </div>
    )
}

export default Navbar
