import React from "react";
import blogs from "../../constants/blogs.json";

const BlogCard1 = () => {
  const blog = blogs.blogs[0];
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
      <h2 className="text-3xl font-semibold mb-5">{blog.title}</h2>
      <p className="text-lg mb-6">{blog.description}</p>
      <div className="h-[1.5px] my-10 bg-black" />

      {blog.breeds.map((breedCategory, index) => (
        <div key={index} className="breed-category mb-6">
          <h3 className="text-3xl font-bold mb-4">{breedCategory.type}</h3>
          {breedCategory.cats.map((cat, i) => (
            <div key={i} className="cat mb-4">
              <h4 className="text-xl font-semibold">
                {i + 1}. {cat.name}
              </h4>
              <p className="text-lg font-normal">{cat.description}</p>
            </div>
          ))}
          <div className="h-[1.5px] my-10 bg-black" />
        </div>
      ))}
      <h1 className="text-3xl font-bold mb-3">
        Choosing the Right Cat Breed for You
      </h1>
      <p className="font-medium mb-2">
        When choosing a cat breed, consider your lifestyle, home environment,
        and the time you can dedicate to grooming and play. Whether you prefer a
        low-maintenance breed or one that thrives on interaction, there’s a
        perfect cat out there for everyone.
      </p>
      <p className="font-medium mb-2">
        By understanding the characteristics and needs of different breeds, you
        can ensure a happy and fulfilling relationship with your feline
        companion. Whether you opt for a regal Thai breed or an exotic foreign
        variety, the joy they bring into your life will be unparalleled.
      </p>
    </div>
  );
};

export default BlogCard1;
