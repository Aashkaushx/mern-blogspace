import React from 'react'
import BlogCard from '../../components/Blog Card/BlogCard';

const Categories = () => {
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
    <div className='flex flex-col gap-8 lg:gap-4 '>
        {data &&
            data.map((items, i)=>(
                <div key={i} className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
                    <BlogCard items={items} />
                </div>
            ))
        }
    </div>
  )
}

export default Categories