import React from 'react';
import { NavLink, Link } from 'react-router-dom';


function BlogCard() {
  return (
    <>
      <div className='blog-card'>
        <div className='card-image'>
          <img src='images/blog-1.jpg' className='img-fluid' alt='blog' />
        </div>
        <div className='blog-content'>
          <p className='date'> 1 Dec, 2023</p>
          <h5 className='title'> A beautiful sunday morning renaissance</h5>
          <p className='desc'> All flex classes comes with additional responsive classes, which makes it easy to set a specific flex class on a specific screen size. </p>
          <Link to='/blog/:id' className='button'>Read More</Link>
        </div>
      </div>
    </>
  )
}

export default BlogCard;