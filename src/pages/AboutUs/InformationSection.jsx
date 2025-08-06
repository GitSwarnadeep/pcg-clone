import React, { useState } from "react";
import filter1 from "/assets/filter1.png";
import filter2_bg from "/assets/filter2_bg.png";
import filter2 from "/assets/filter2.png";
import filter3 from "/assets/filter3.png";
import filter3_2 from "/assets/filter3_2.png";
import { Link } from "react-router-dom";

const InformationSection = () => {
  const [filter, setFilter] = useState("CorporateInformation");

  const data = [
    {
      id: 1,
      title: "Corporate Information",
      content: {
        heading: "Perfect Companion Group",
        description:
          "Perfect Companion Group Co., Ltd. was established in 1979 by a group of pet food specialists...",
        imageUrl: filter1, 
      },
      type: "CorporateInformation",
    },
    {
      id: 2,
      title: "Pet Research Center",
      content: {
        heading: "Pet Research and Development",
        description:
          "Our Pet Research Center is at the forefront of innovation in pet food development...",
        imageUrl: filter2,
        backgroundImage: filter2_bg,
      },
      type: "PetResearchCenter",
    },
    {
      id: 3,
      title: "Awards & Achievements",
      content: {
        heading: "Awards & Achievements",
        description:
          "We have been recognized globally for our outstanding contribution in the field of pet food...",
        imageUrl: filter3, 
      },
      type: "AwardsAchievements",
    },
  ];

  const filteredContent = data.find((item) => item.type === filter);

  return (
    <section className="flex flex-col p-6 lg:p-10 lg:px-32">
      {/* Filter Tabs */}
      <div className="flex flex-row mb-9 justify-center items-center gap-4 lg:gap-0">
        {data.map((item) => (
          <button
            key={item.id}
            className={` p-2 w-full sm:w-1/3 px-4 sm:px-16 border-b-2 border-blue-500 rounded text-xs lg:text-lg ${
              filter === item.type ? "text-blue-500 border-t-2 border-r-2 border-l-2 border-blue-500" : "text-gray-700"
            } rounded-lg transition-colors`}
            onClick={() => setFilter(item.type)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Filtered Content */}
      {filteredContent && (
        <div>
          {/* Conditional layout based on the selected section */}
          {filter === "CorporateInformation" && (
            <div className="flex flex-col lg:flex-row gap-5">
              {/* Text Section */}
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                  Corporate Information
                </h2>
                <h1 className="text-3xl md:text-5xl my-8">Perfect Companion Group</h1>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Perfect Companion Group Co., Ltd. was established in 1979 by a group of pet food specialists who have been well aware that the pet owners these days regarding their pets not only as just pets but also as companions. <br />
                  The main goals of customer service are...
                </p>
              </div>
              {/* Image Section */}
              <div className="lg:w-1/2">
                <img
                  src={filter1}
                  alt={filteredContent.content.heading}
                  className="w-full h-auto"
                />
              </div>
            </div>
          )}

          {filter === "PetResearchCenter" && (
            <div
              className="flex flex-col lg:flex-row gap-5 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${filter2_bg})` }} // Setting the background image
            >
              {/* Image Section (Left) */}
              <div className="lg:w-1/2 flex items-center justify-center">
                <img
                  src={filter2}
                  alt={filteredContent.content.heading}
                  className="w-auto h-auto max-w-full"
                />
              </div>

              {/* Text Section (Right) */}
              <div className="lg:w-1/2 p-5 flex text-white items-center">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    Pet Research Center
                  </h2>
                  <h1 className="text-4xl md:text-6xl max-w-lg mb-4 ">
                    Perfect Companion Group
                  </h1>
                  <p className="text-base md:text-lg mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet at nisi eius neque aspernatur...
                  </p>
                  <a className="text-blue-400" href="">https://perfectcompanionchampion.com</a>
                </div>
              </div>
            </div>
          )}

{filter === "AwardsAchievements" && (
  <Link to="/">
    <div className="bg-[#4276c8] text-white p-6 md:p-10">
      {/* Full-width background layout */}
      <h2 className="text-2xl mb-6 text-center">
        {filteredContent.content.heading}
      </h2>
      <h2 className="text-4xl md:text-6xl mb-6 text-center">Awards & Pride</h2>

      {/* Responsive grid layout for awards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-6">
        {/* Award 1 */}
        <div className="relative text-black p-5">
          <div className="absolute bg-white rounded-lg top-[80%] left-[50%] translate-x-[-50%] w-[80%] md:w-[50%] px-5 py-8">
            <p className="font-semibold text-lg">LKC All Breed Dog Show</p>
            <p className="text-sm">
              The LKC All Breed Dog Show at Louisville, USA...
            </p>
          </div>
          <img
            src={filter3}
            alt="Award 1"
            className="w-full h-[200px] md:h-[300px] object-cover mb-4"
          />
        </div>

        {/* Award 2 */}
        <div className="relative text-black p-5">
          <div className="absolute bg-white rounded-lg top-[78%] left-[50%] translate-x-[-50%] w-[80%] md:w-[50%] px-5 py-8">
            <p className="font-semibold text-lg">Best in Show</p>
            <p className="text-sm">
              The winner of Best in Show at the Pomera event...
            </p>
          </div>
          <img
            src={filter3_2}
            alt="Award 2"
            className="w-full h-[200px] md:h-[300px] object-cover mb-4"
          />
        </div>
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-[30%] lg:mt-16">
        <button className="text-black text-lg md:text-xl px-8 md:px-16 py-2 md:py-3 border-2 rounded-lg shadow-md hover:bg-[#19325b] hover:text-white transition">
          See More
        </button>
      </div>
    </div>
  </Link>
)}

        </div>
      )}
    </section>
  );
};

export default InformationSection;
