import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='my-4 flex items-center justify-center flex-col'>
        <div className='text-4xl flex flex-col w-full items-start'>
            <h1 className='font-bold'> Hey I am the code master
            </h1>
            <h2>Discover new blogs of technology and trends</h2>
        </div>
        <div className='my-8 flex flex-col md:flex-row items-center justify-between gap-8'>
            <div className='w-full md:w-1/2'>
                <img 
                    src="./temp.jpg" 
                    alt="temp" 
                    className='rounded w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover'/>
            </div>
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl font-bold'>Lorem Ipsum</h1>
                <p className='mt-2 mb-8'>
                    "Lorem ipsum" is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements.
                </p>
                <Link className='mt-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-4 py-2 rounded text-white' >
                    Read Blog
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header