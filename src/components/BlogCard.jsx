// BlogCard.js
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col relative h-[500px]  rounded-lg overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto cursor-pointer"
        onClick={() => navigate(`/blogs/${blog.id}`)}
      />
      <div className="flex flex-col cursor-pointer px-5 py-5 text-[#19325b] bg-white bg-opacity-80 shadow-lg top-[150px] absolute h-[220px] w-[90%] left-[5%] rounded-lg">
        <div className="flex justify-between items-center mb-5 ">
          <p className="text-gray-500 font-medium border-2 border-gray-400 px-4 rounded-full">
            Blog
          </p>
          <p>{blog.date}</p>
        </div>
        <h3
          className="line-clamp-1 px-1 font-semibold text-2xl "
          onClick={() => navigate(`/blogs/${blog.id}`)}
        >
          {blog.title}
        </h3>
      </div>
    </div>
  );
};

export default BlogCard;
