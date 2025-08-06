import React from "react";
import globe from "/assets/globe.png";

function Experience() {
  const products = [
    // {
    //   title: "LUVCARE",
    //   image: "/assets/prod1.png",
    // },
    {
      title: "SmartHeart",
      image: "/assets/prod2.png",
    },
    {
      title: "SmartHeart",
      image: "/assets/prod3.png",
    },
    // {
    //   title: "Me-O GOLD",
    //   image: "/assets/prod4.png",
    // },
    // {
    //   title: "Me-O Selection",
    //   image: "/assets/prod5.png",
    // },
    {
      title: "Me-O",
      image: "/assets/prod6.png",
    },
    // {
    //   title: "SAITEKI",
    //   image: "/assets/prod7.png",
    // },
    {
      title: "OPTIMUM",
      image: "/assets/prod8.png",
    },
    // {
    //   title: "MAXWIN",
    //   image: "/assets/prod9.png",
    // },

    {
      title: "A Pro",
      image: "/assets/prod10.png",
    },
    {
      title: "Cutize Cat",
      image: "/assets/Cutize-Cat1.jpg",
    },
    {
      title: "Cat Choize",
      image: "/assets/Cat-Choize1.jpg",
    },
  ];
  return (
    <div className="relative bg-white py-20 overflow-hidden">
      <img
        src={globe}
        alt="Background Globe"
        className="absolute inset-0 object-cover w-full h-full  z-10"
      />
      <div className="container mx-auto flex flex-col items-center gap-12 relative z-10">
        <div className="flex flex-wrap justify-center gap-8 md:gap-24">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-8xl font-bold text-[#19325b]">
              45
            </h1>
            <p className="text-sm lg:text-2xl font-medium text-[#19325b]">
              Years of Experience
            </p>
          </div>
          <div className="w-[2px] h-16 lg:h-[20vh] bg-[#19325b]"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-8xl font-bold text-[#19325b]">
              40
            </h1>
            <p className="text-sm lg:text-2xl font-medium text-[#19325b]">
              Network Countries
            </p>
          </div>
          <div className="w-[2px] h-16 lg:h-[20vh] bg-[#19325b]"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-5xl lg:text-8xl font-bold text-[#19325b]">
              20
            </h1>
            <p className="text-sm lg:text-2xl font-medium text-[#19325b]">
              Brands
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {products.map((product, index) => (
            <img
              key={index}
              src={product.image}
              alt={product.title}
              className="h-32 w-32 object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
