import React from 'react'

const Description = () => {
  return (
    <div>
        <h1 className='text-2xl fond-semibold'>Lorem Ipsum Heading</h1>
        <img 
            className='mt-4 w-full h-[400px] object-cover rounded' 
            src="../temp.jpg" 
            alt='blog-image' 
        />
        <p className='mt-4'>
            Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements.
        </p>
    </div>
  )
}

export default Description