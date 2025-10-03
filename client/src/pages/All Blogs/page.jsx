import React from 'react'
import AllBlogsComponent from '../../components/All Blogs/AllBlogsComponent';

const AllBlogs = () => {
  return (
     <div className='mb-4 py-4'>
        <h1 className='text-xl font-semibold mb-4'>All Blogs</h1>
        <AllBlogsComponent />
    </div>
  )
}

export default AllBlogs;