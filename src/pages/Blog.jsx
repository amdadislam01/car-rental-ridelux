import React from 'react'

import { blogdata } from '../assets/Blog'
const Blog = () => {
  return (
    <>
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            - Blog
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-red-600">
            <span className="text-white bricolage-font">Our </span>Blog
          </h1>
        </div>
      </div>
    </>
  )
}

export default Blog
