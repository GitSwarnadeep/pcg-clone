import React from "react";
import blogs from "../../constants/blogs.json";

const BlogCard2 = () => {
  const blog = blogs.blogs[1];

  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="w-full h-auto mb-4" />
      <h2 className="text-3xl font-semibold mb-5">{blog.title}</h2>
      <p className="text-lg  mb-6">{blog.description}</p>
      <div className="h-[1.5px] my-10 bg-black" />

      <div className="content">
        <h3 className="text-3xl font-bold mb-4">What is Cat Hair Loss ?</h3>
        <p className="text-lg mb-6">{blog.content.introduction}</p>
        <div className="h-[1px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">Causes of Cat Hair Loss</h3>
        <ul className="pl-5">
          {blog.content.causes.map((cause, index) => (
            <li key={index} className="text-lg mb-3">
              <strong>
                {index + 1}. {cause.name}
              </strong>
              <p>{cause.description}</p>
            </li>
          ))}
        </ul>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-2xl font-bold mb-4">Signs of Watch Out For</h3>
        <ul className="list-disc pl-5">
          {blog.content.signs.map((sign, index) => (
            <li key={index} className="text-lg">
              {sign}
            </li>
          ))}
        </ul>
        <p className="text-lg mt-2">
          If you notice any of these symptoms, consult a veterinarian to
          determine the underlying cause and appropriate treatment
        </p>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">Prevention Cat Hair Loss</h3>
        <ul className="pl-5 mb-6">
          <li className=" mb-2">
            <p className=" text-lg font-semibold">1. Regular Grooming:</p>
            <p className=" mt-1">
              Frequent brushing helps remove loose fur and keeps your cat’s coat
              healthy. It also allows you to check for parasites or skin
              abnormalities.
            </p>
          </li>
          <li className="mb-2">
            <p className="text-lg font-semibold">2. Parasite Control:</p>
            <p className="mt-1">
              Use veterinarian-recommended flea and tick preventatives to
              protect your cat from parasites. Maintaining a clean environment
              is equally important.
            </p>
          </li>
          <li className="mb-2">
            <p className="text-lg font-semibold">3. Stress Reduction:</p>
            <p className="mt-1">
              Provide a stimulating and calm environment for your cat.
              Interactive toys, scratching posts, and designated playtime can
              reduce anxiety and over-grooming.
            </p>
          </li>
          <li className=" mb-2">
            <p className="text-lg font-semibold">4. Balanced Nutrition:</p>
            <p className="mt-1">
              Feeding your cat a high-quality diet rich in essential nutrients
              can strengthen their coat and prevent shedding. Opt for food
              formulated to address hair loss concerns.
            </p>
          </li>
        </ul>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-2xl font-semibold mb-4">
          How Me-O Anti-Hairball Formula Helps
        </h3>
        <p className="mb-2 text-lg">
          Me-O Anti-Hairball Formula is specifically designed to address hair
          loss and related concerns in cats. Here’s how it works :
        </p>
        <ul className="pl-5">
          <li className=" mb-3">
            <p className="text-lg font-semibold">
              1. Promotes Skin and Coat Health
            </p>
            {
              blog.content.me_o_anti_hairball_formula
                .promotes_skin_and_coat_health
            }
          </li>
          <li className=" mb-3">
            <p className="text-lg font-semibold">
              2. Reduces Hairball Formation
            </p>
            {blog.content.me_o_anti_hairball_formula.reduces_hairball_formation}
          </li>
          <li className=" mb-3">
            <p className="text-lg font-semibold">3. Boosts Immunity</p>
            {blog.content.me_o_anti_hairball_formula.boosts_immunity}
          </li>
          <li className=" mb-3">
            <p className="text-lg font-semibold">
              4. Complete and Balanced Nutrition
            </p>
            {
              blog.content.me_o_anti_hairball_formula
                .complete_and_balanced_nutrition
            }
          </li>
        </ul>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">When to See a Veterinarian</h3>
        <p className="text-lg font-medium">
          While preventive measures and a healthy diet can address many cases of
          hair loss, some situations require professional attention. Visit your
          vet if:
        </p>
        <div className="content">
          <ul className="list-disc pl-5">
            {blog.content.when_to_see_a_veterinarian
              .split("\n")
              .map((line, index) => {
                if (line.trim() === "") {
                  return (
                    <p key={index} className="text-lg mb-3">
                      {line}
                    </p>
                  );
                } else {
                  return (
                    <li key={index} className="text-lg">
                      {line}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
        <p className="mt-3 text-lg">
          Early diagnosis and treatment are crucial for resolving underlying
          issues and restoring your cat’s coat.
        </p>

        <div className="h-[1.5px] my-10 bg-black" />

        <h3 className="text-3xl font-bold mb-4">Conclusion</h3>
        <p className="text-lg mb-3">
          Cat hair loss is more than a cosmetic issue—it’s often a sign of
          underlying health problems that require attention. By understanding
          the causes and taking preventive measures, you can help your feline
          friend maintain a beautiful and healthy coat. High-quality nutrition,
          such as Me-O Anti-Hairball Formula, plays a vital role in preventing
          hair loss and supporting overall well-being.
        </p>
        <p className="text-lg">
          Invest in your cat’s health today, and enjoy the companionship of a
          happy, healthy, and gorgeous feline friend.
        </p>
      </div>
    </div>
  );
};

export default BlogCard2;
