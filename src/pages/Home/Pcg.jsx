import React from "react";
import pcg1 from "/assets/pcg1.png";
import pcg3 from "/assets/pcg3.png";
import bgPic1 from "/Banner/Home.jpeg";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Pcg() {
  return (
    <section>
      <section className="hidden lg:block relative w-full h-screen">
        {/* First Image with Text */}
        <div
          className="absolute top-[5%] left-[12%] w-[40%] h-[50%] bg-cover bg-center z-20"
          style={{ backgroundImage: `url(${pcg1})` }}
        >
          <div className="absolute top-[45%] left-[50%] w-[70%] transform translate-x-full -translate-y-1/2 p-5">
            <h1 className="text-3xl lg:text-5xl text-[#19325b] font-bold mt-5 mb-4">
              Perfect Companion India (PCIN)
            </h1>
            <p className="text-zinc-500 text-lg">
              Perfect Companion India delivers premium pet nutrition through trusted brands like SmartHeart, Me-O, SmartHeart Gold, and Cuties Catz. Catering to pet parents who see their pets as companions, PCIN provides the best dog food and cat food, ensuring health, happiness, and vitality for your beloved pets.
            </p>
            <div className="relative flex flex-col lg:flex-row items-center justify-evenly lg:justify-start text-center lg:text-left mt-4">
              <Link to={"/about"}>
                <button className="border text-black font-bold py-2 px-4 flex justify-between gap-8 items-center text-lg">
                  About PCIN
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Text Block with Blue Background (Behind Other Images) */}
        <div className="absolute top-[50%] left-[13%] w-[40%] h-[50%] bg-[#19325b] text-white flex justify-start items-center p-5 text-xl z-10">
          <div className="w-[500px]">
            The pet food market now mirrors human food trends, with pet parents seeking safe, hygienic, and healthy options. Perfect Companion India (PCIN) meets these needs through trusted brands like SmartHeart, Me-O, SmartHeart Gold, and Cuties Catz. Our international-standard facilities and continuous investment ensure we deliver the best dog food and best cat food. With a focus on quality and innovation, we prioritize pet health, happiness, and vitality, leading the competitive pet food industry.
          </div>
        </div>

        {/* Third Image */}
        <div
          className="absolute top-[60%] left-[48%] w-[40%] h-[50%] bg-cover bg-center z-20"
          style={{ backgroundImage: `url(${bgPic1})` }}
        ></div>
      </section>

      {/* Mobile Section */}
      <section className="lg:hidden flex flex-col items-center w-full p-4">
        <div
          className="relative w-full h-[40vh] bg-cover bg-center mb-4"
          style={{ backgroundImage: `url(${pcg1})` }}
        ></div>

        <div className="w-full bg-white bg-opacity-75 p-4 text-center">
          <h1 className="text-3xl text-[#19325b] font-bold mb-4">PCG</h1>
          <p className="text-zinc-500 text-base mb-4">
            Perfect Companion Group Co., Ltd. was established in 1979 by a group
            of pet food specialists who have been well aware that the pet owners
            these days regard their pets not only as just pets but also as
            companions.
          </p>
          <div className="flex justify-center">
            <Link to={"/about"}>
              <button className="border text-black font-bold py-2 px-4 flex items-center gap-2 text-base">
                About PCG
                <IoIosArrowForward />
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full bg-[#19325b] text-white text-base p-4 mt-4">
          The concept of pet food in the market nowadays is following that of
          human food. Modern pet owners carefully select food for their pets as
          they want to be certain that the food is safe, hygienic, and healthy
          for them. As we are fully aware of this important market trend, we
          thus always keep our production facility highly standardized.
          Continuous Investment to bring up and maintain our manufacturing
          establishment at international standard has become one of our key
          success factors in this severely competitive industry.
        </div>

        <div
          className="relative w-full h-[40vh] bg-cover bg-center mt-4"
          style={{ backgroundImage: `url(${bgPic1})` }}
        ></div>
      </section>
    </section>
  );
}

export default Pcg;
