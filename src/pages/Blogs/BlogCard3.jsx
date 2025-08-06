import React from "react";
import blogs from "../../constants/blogs.json";

const BlogCard3 = () => {
  const blog = blogs.blogs[2];

  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
      <h2 className="text-3xl font-bold mb-5">{blog.title}</h2>
      <p className="text-lg mb-6">{blog.description}</p>
      <div className="h-[1.5px] my-10 bg-black" />

      <div className="content">
        <h3 className="text-3xl font-bold mb-4">
          Understanding Cat Tail Movements
        </h3>
        <p className="text-lg font-medium mb-6">
          {blog.content.understanding_tail_movements}
        </p>

        <ul className="pl-5 mb-6">
          {blog.content.tail_signals.map((signal, index) => (
            <li key={index} className=" mb-4">
              <strong className="text-xl">
                {index + 1}. {signal.name} :{" "}
              </strong>
              <p className="text-lg">{signal.description}</p>
            </li>
          ))}
        </ul>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">Decoding Mixed Signals</h3>
        <p className="text-lg mb-6">{blog.content.decoding_mixed_signals}</p>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">
          How to Respond To Tail Signals
        </h3>
        <p className="mb-3 text-lg">
          Understanding and respecting your cat’s tail signals can strengthen
          your bond with them. Here are some tips:
        </p>
        <ul className="list-disc pl-5 mb-6">
          {Object.entries(blog.content.how_to_respond).map(
            ([action, description], index) => (
              <li key={index} className="text-lg mb-4">
                <strong>
                  {action
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  :
                </strong>{" "}
                {description}
              </li>
            )
          )}
        </ul>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">
          The Role of Diet in a Cat's Behaviour
        </h3>
        <p className="mb-2 ">A cat’s diet significantly impacts its overall health, energy levels, and playful nature. Brands like Me-O, APro, and Cat Choize provide balanced and nutritious options that cater to a cat’s specific needs</p>
        <ul className="list-decimal pl-5 mb-6">
          <li className="text-lg mb-4">
            <p className="text-xl font-bold mb-2">Me-O Cat Food </p>
            {blog.content.role_of_diet.me_o_cat_food}
          </li>
          <li className="text-lg mb-4">
            <p className="text-xl font-bold mb-2">APro Cat Food </p>

            {blog.content.role_of_diet.apro_cat_food}
          </li>
          <li className="text-lg mb-4">
            <p className="text-xl font-bold mb-2">Cat Choize Cat Food</p>
            {blog.content.role_of_diet.cat_choize_cat_food}
          </li>
        </ul>

        <h3 className="text-3xl font-bold mb-4">
          How Diet Encourages Playful Nature
        </h3>
        <p className="text-lg mb-4">
          Playfulness is an essential part of a cat’s life. A healthy diet
          provides the energy and mood stability required for cats to engage in
          play and exploration. High-quality cat food:
        </p>
        <ul className="list-disc pl-5 mb-6">
          {blog.content.how_diet_encourages_playful_nature.map((tip, index) => (
            <li key={index} className="">
              {tip}
            </li>
          ))}
        </ul>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">Conclusion</h3>
        <p className="mb-2">
          When a cat wags its tail, it’s communicating a message. Understanding
          these signals can help you build a stronger bond with your feline
          friend. By providing a healthy diet with brands like Me-O, APro, and
          Cat Choize, you can support your cat’s playful and expressive nature,
          ensuring they lead a happy and fulfilling life.
        </p>

        <p>
          Pay attention to your cat’s tail, feed them right, and enjoy the
          unique ways they communicate with you!
        </p>
      </div>
    </div>
  );
};

export default BlogCard3;
