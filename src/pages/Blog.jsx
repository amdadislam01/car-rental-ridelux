import React from "react";

import { blogdata } from "../assets/Blog";
const Blog = () => {
  return (
    <>
      <div className="banner-section flex justify-center items-center h-[350px] lg:h-[550px]">
        <div className="banner-section-content text-center z-10">
          <h6 className="uppercase text-sm lg:text-xl text-white bricolage-font">
            - Blog & News
          </h6>
          <h1 className="text-4xl lg:text-5xl xl:text-8xl font-semibold bricolage-font text-red-600">
            <span className="text-white bricolage-font">Our </span>Blog
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
        {blogdata.map((blog) => (
          <div className="blog-item bg-[#1e1f22] group" key={blog.id}>
            <div className="blog-image overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="group-hover:scale-110 transition-all duration-300 w-full h-[250px] object-cover"
              />
            </div>
            <div className="blog-content p-5 py-8">
              <div className="ate bg-red-600 w-fit px-4 py-0.5 text-md text-white bricolage-font rounded-md mb-3">
                {blog.date}
              </div>
              <h4 className="text-lg lg:text-2xl bricolage-font text-white font-semibold uppercase">
                {blog.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog;
