import React from 'react';
import { Link } from 'react-router-dom';

const EditBlogs = () => {
  const data = [
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
        {
            img: "../temp.jpg",
            title: "Lorem IPsum",
            description: "Lorem ipsum is a nonsensical, scrambled Latin-like text used as placeholder text in graphic design, publishing, and web development to demonstrate a layout or font before real content is available. It is a corrupted version of a passage from a 1st-century BC Latin text by Cicero, with its words jumbled to prevent it from being distracting and to focus on the design elements."
        },
    ];
  return (
    <div className='p-4 '>
      <h1 className='text-2xl font-semibold '>Add Blogs</h1>
      <div className='grid grid-cols-3 gap-8 lg:gap-4 my-4 '>
          {data &&
              data.map((items, i)=>(
                <div className='bg-white rounded-xl p-4 flex flex-col items-center justify-center'>
                  <div className='w-full lg:w-4/6'>
                  <img src={items.img} alt='./' className='rounded object-cover'/>
                </div>
                <div className='mt-4'>
                  <h1 className='text-2xl font-semibold'>{items.title}</h1>
                <p className='mb-4'>{items.description.slice(0,170)}...</p> 
                </div>    
                <div className='w-[100%] flex itmes-center justify-between gap-4'>
                  <Link 
                    to="/admin-dashboard/update-blogs/:id" 
                    className='bg-blue-600 w-[100%] text-center  text-white rounded px-4 py-2'
                  >
                    Edit
                  </Link>
                  <Link 
                    to="/admin-dashboard/update-blogs/:id"
                    className='bg-red-600 w-[100%] text-center text-white rounded px-4 py-2'>
                    Delete
                  </Link>
                </div>   
                </div>
              ))}
      </div>
    </div>
  )
}

export default EditBlogs