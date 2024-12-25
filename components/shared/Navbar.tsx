import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const paths = [
        {text: "Home", href:"/"},
        {text: "Blog posts", href:"/posts"},
        {text: "Reviews", href:"/reviews"}
    ]
    return (
        <div className='flex flex-rows'>
            {paths.map(({text, href}) => (
                <div className="mx-4">
                    <Link href={href} key={text}>{text}</Link>
                </div>
            ))}
        </div>
    )
}

export default Navbar
