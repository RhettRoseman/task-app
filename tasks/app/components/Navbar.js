import React from 'react'
import Link from 'next/link'

export default function Navbar(){
    return(
        <nav className='text-white m-2'>
            <div className='max-w-4xl mx-auto px-4 py-4 flex items-center justify-between'>
                {/* App Title */}
                <h1 className='text-2xl font-bold'>
                    Task Manager
                </h1>
                <div className='m-5 flex space-x-6 text-2xl'>
                 <Link href='/' className="hover:text-green-600">Home</Link>
                 {/* <Link href='/Tasks'className="hover:text-green-600">Tasks</Link> */}
                 <Link href='/contact'className="hover:text-green-600">Contact</Link>
                </div>

            </div>
        </nav>
    )
}